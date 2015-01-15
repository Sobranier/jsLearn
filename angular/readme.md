ng-app angular应用程序
ng-model 绑定输入域的值到应用程序变量name
ng-bind 把变量那么当订到某个段落的innerHTML
ng-init初始化

angular会再{{}}之内输出数据

angular表达式：
数字、字符串、对象、数组

循环
<li ng-repeat="x in names">{{x}}</li>


angularjs控制器控制ansular应用程序的数据,ng-controller指令定义了应用程序控制器，控制器的$score参数只想应用程序HTML元素

error!!!!js控制器测试失败，一直没有通过
于是碰到了angular的第一个问题：
经过检查，1.0.3没有问题，1.3.8有问题


_________________________
ng-app标记angularjs的作用域，angularjs脚本仅在这个区域内运行

handlebars

var source = $('#XXX').html();
var template = Handlebars.compile(source);
var context = {title: "My New Post", body: "This is my first post!"}
var html    = template(context);

12-29 再整理
===========
ng-app 标记了angularjs的脚本作用域

注入器将用于创建此应用程序的依赖注入，注入器将会创建根作用域作为我们应用模型的范围，angularjs将会链接更作用域中得dom，从ngapp标记的html标签出开始，逐步处理dom中得指令和绑定

模型-视图-控制器MVC

关于js压缩，由于angularjs是通过控制器构造函数的参数名字来推断以来服务名称的。所以压缩控制器的代码，所有的参数也会被压缩，这时候依赖煮熟系统就不能正确地识别出服务了。
为了克服压缩引起的问题，要再控制器函数里面给$inject属性赋值一个依赖服务标识符的数组。

ng-src:
一般的src绑定了{{}}之后，浏览器会把这个标记进行字面解释，发起非法的http://XXXX/{{}}请求，浏览器载入界面的时候，同事会请求载入图片，angularjs在界面载入完毕的时候才开始变异，浏览器请求载入图片时{{XX}}还没有变异，有了ngsrc会避免这种情况，防止浏览器产生一个非法的地址请求
如果真的使用了src，会有非法请求的记录

浏览器会首先加载html界面，渲染它，然后angular才会有机会结实，所以有时候用{{}}会让用户看到，用ng-bind回更好一些

提交表单的时候ng-submit会自动阻止浏览器执行默认的post操作。

ng-click,ng-dbclick,
ng-repeat,
ng-show,ng-hide,

######css的修改有三种建议

一、对类名控制：如class = 'menu-disabled-{{isDisabled}}'

二、ng-class = {erroe:isError,warning:isWarning}

三、<span ng-style=”myColor”>your color</span>
$scope.myColor={cursor: ‘pointer’,color:’blue’};



ng-src、ng-href


$watch();

provider,factory,service

过滤器，自定义过滤器modelname.filter('XXX',function(){});   <h1>{{item | XXX}}</h1>


在全局空间写变量或者函数都是全局污染，这样写的都是window对象





13日记录

现在开始angular的学习记录可能会出现在两处，本初测试或者blog搭建处，

14
time-grunt
load-grunt-tasks

npm init以后，npm install grunt
如果需要同时更改packagejson中得依赖项npm install grunt --save-dev


1-15笔记

