core模块本身的逻辑可能简单一些，并且可能可以

模块的开头只引入了var文件夹下的各个模块。

开头就定义了var document = window.document;
https://developer.mozilla.org/en-US/docs/Web/API/Window/document
顺便了解一下docuemnt和window到底什么关系
window是指窗体、document指页面、document是window的一个子对象、用户不能改变document.location，因为这是当前显示文档的位置，但是可以改变window.location（用其他文档取代当前文档）。window.location本生也是一个对象，document.location本身不是一个对象

事实证明这不是真的，运行window.location 和 document.location的结果是一样的

document.location="http://baidu.com"也可以重定向,window.location = "http://google.com"也可以重定向

docuemnt == window.document  结果是true啊
问了一下冯总，document可能有多个，window.docuemnt是父容器,于是基本可以说，为了安全起见，很多时候应该使用window.document。这也解释了jquery core里面第一句话
我真是傻逼啊，人家注释已经说的很清楚了
Use the correst docuemnt according with wind argument (sandbox)


我们可以看到一些简单地用法,document对象本身有一些属性以及方法


之后vat version = "@VERSION";
这个version下面就用到了，简单理解为jquery的版本
？？？？？？？

jQuery = function (selectorr, context) {
    return new jQuery.fb.init(selector, context);
}
?????????????

有几个正则表达式，
>>??????????
fcameCase = functon (all, letter) {
    return letter.toUpperCase;
}
从字面意思上看时换大写，具体要做什么事情不知

初始化里面还有一些没看到--------！！！！！

jQuery.fn = jQuery.prototype = {
    ...
    constructor: jQuery,
    // constructor重新指向jQuery，这里插播一个高程157页的东西，重写对象原型会切断与任何之前已经存的对象实例之间的联系。
    selector: "",
    length:0, //原始的jquery对象长度是0
    toArray: function() {
        return slice.call( this );  //$('XX').toArray()效果和$('XX').slice()效果一致
    },
    get: function( num ) {
        return num != null ?
            ( num < 0 ? this[ num + this.length ] : this[ num ] ) :
            slice.call (this);  //也就是没有输入的情况下所有将会输出（以数组形式）
    }

    这里非常热衷于用类似的方式把原始方法转化成jquery对象的方法
        slice: function() {
            return this.pushStack(slice.apply( this, arguments) );
        }
}

老实说一下子看不懂
Jquery.fn = jQuery.prototype = {
    constructor: jQuery,
    ...
}

jQuery.extend



最下面还有两个函数
我们实现已经指导class2type这个货就是一个空对象
jQuery.each('Boolean Number String Function Array Date RegExp Object Error'.split(""), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
    var length = obj.length,
        type = jQuery.type( obj );
    if (type === "function" || jQuery.isWindow( obj ) ) {
        return false;
    }

    // nodeType是节点类型属性，等于1的时候节点是一个element
    if (obj.nodeType === 1 && length) {
        return false;
    }

    return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


