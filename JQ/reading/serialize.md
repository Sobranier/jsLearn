
http://blog.csdn.net/billfeller/article/details/7617263





首先需要明白默认表单提交动作会如何将数据发送到服务器
１）对表单字段的名称和值进行URL编码，使用&分隔
２）不发送禁用的表单字段
３）只发送勾选的复选框和单选按钮
４）不发送type为"reset"和"button"的按钮
５）多选选择框中的每个选中的值单独一个条目
６）在单击提交按钮提交表单的情况下，也会发送提交按钮；否则，不发过提交按钮，也包括type为"image"的<input/>元素
７）<select/>元素的值，就是选中的<option/>元素的value特性的值。如果<option/>元素没有value特性，则是<option/>元素的文本值。
在表单序列化过程中，一般不包含任何按钮字段，因为结果字符串很可能是通过其它方式提交的，如ajax



从最基本的开始：
1、require的问题

2、正则的问题

于是在最开始的地方我们看到了
define([
    ...
    "./manipulation/var/rcheckableType",
    ...
]),function( jQuery, rcheckableType) {
    ...
    return jQuery;
})

我们打开对应文件夹下地recheckableType.js

define(function() {
    return (/^(?:checkbox|radio)$/i);
});
这个功能用来匹配checkbox或者radio属性，我们接下来会用到

再看一下代码内部最开始的几个正则的功能：

r20 = /%20/g;   //这个用来匹配所有的空格
rbracket = /\[\]$/;     //这个用来匹配结尾的[]
rCRLF = /\r?\n/g;   //这个用来匹配全局的换行符
rsubmitterType = /^(?:submit|button|image|reset|file)$/i;   //我们可以联想到这个是用来检测提交按钮的type属性的
rsubmittable = /^(?:input|select|textarea|keygen)/i;    //这个用来检测节点的类型


3、jquery

在主题部分，使用jQuery.fn.extend({});这个方法继承了jQuery原型($.fn)对象，以提供jQuery原型新的方法，可以链式调用jQuery函数

这里serialize有两个方法，serialize 和serializeArray。前者调用了jQuery.param(this.serializeArray())
我们这里一共要讨论三个函数：
serializeArray();
jQuery.param(a,traditional);
buildParams(prefix, obj, traditional, add)


serializeArray()的效果是将表单的内容以数组形式序列化返回。数组的每个元素是{name:'...',value:'...'}格式的对象
serialize()则是在此基础上讲结果创建URL 编码文本字符串
	serializeArray: function() {
		return this.map(function() {
            // 这里是做什么,这里有两个map，第一个是处理form的，第二个是遍历子节点的
            注意这里的this是form
			var elements = jQuery.prop( this, "elements" );
            // 获取form中第一个元素的属性'elements'
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
            //filter这里是一个过滤器,过滤的结果会在下一步进行处理
			var type = this.type;
			// Use .is( ":disabled" ) so that fieldset[disabled] works
            // 这里会过滤什么样的结果呢？必须存在的，并且able的, 并且节点是input\select..，并且节点类型不是image、subbmit这些，并且(最后那个的含义待定，是从外界传入的)
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();
			return val == null ?
				null :
                // 遍历属性
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
                        //这里貌似是对\r\n进行统一
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}

到这里重新认识了jQuery.map()和jQuery.filter()的用法。
以及jQuery.prop、jQuery.attr()

http://wenzhixin.net.cn/2013/05/24/jquery_attr_prop

根据官方的建议：具有 true 和 false 两个属性的属性，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()
关于这两个的区别之后再详细讨论

不过从官网的这个简单例子我们已经可以看到
http://api.jquery.com/prop/

在现在版本（1.6+）的jquery中.attr('checked')不会随着点击变化，但是.prop('chekced')和.is(':checked')还会产生变化;






下一个函数式jQuery.param
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
            // 这里进行编码,将新的value添加到字符串后面
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	if ( traditional === undefined ) {
        //经过检测，我当前版本的jquerjQUery.ajaxSettings.traditional的值是undefined，所以traditional将会返回false
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
    这里要注意的是，通过 serialize 传进来的肯定是数组
    // 最后一个用来判断是否是纯粹的对象
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
        //可以简单理解为不是一个数组的时候的情况
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
    //这里给s之前是数组，这里转换成字符串，同时把所有的空格切换成+
	return s.join( "&" ).replace( r20, "+" );
};


/这个函数其实也挺好理解的，obj就是被遍历传进来的各个对象，traditional在我这个版本传进来是false
function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
        // 我们明显会发现，当这里的obj如果传进来是数组的时候，会进行一个[]的子串判断
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}



记录一下：
prop
map
filter

