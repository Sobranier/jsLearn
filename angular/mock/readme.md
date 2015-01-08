每个界面只有一个ng-app
npm start
npm protractor

代码编辑工具
断电调试工具
版本管理工具
代码合并和混淆工具
依赖管理工具
单元测试工具
集成测试工具

npm主要用来自动化加载node的一些插件

npm -g是安装到全局环境里面o

npm启动的时候会读packagejson，然后加载配置项

bower install XXX  bower会自动找到最新版本的XXX

http-server可以把任意一个目录变成浏览器可以访问

karma用来测试，可以配合比如mocha，还有别的，另外有Protractor，是专门为angular设计的测试工具
npm run protractor



为什么需要mvc？
1、代码规模越来越大，需要切分职责
2、复用
3、后期维护方便

前端MVC困难：
1、操作DOM代码必须要等待整个界面加载完成
2、多个js互相依赖
3、js原型继承带来困难



不用继承，而使用service。

注意：
1、不要试图去复用Controller，一个控制器一般只负责一小块
2、不要在Controller中操作DOM，这不是控制器的职责
3、不要在Controller里面做数据格式化，ng有很好用的表单
4、不要在Controller里面做数据过滤操作，ng有$filter服务
5、一般Controller之间不会互相调用，控制器之间的交互会通过事件进行。



ng-model的内容会被挂在根作用域下面$scope

用directive来实现view复用

angularjs中得mvc是全部借助于$scope这样的作用域实现的

还有一个最顶层的根作用域：$rootScope
有点像全局变量

$on\$emit\$broadcast

$watch()\$apply()
子$scope会继承父级元素的$scope
angular.element($0).scope()

http-server p 8000

app.js
controller.js
directive,js
filters.js
services.js
route.js

route里面的#是防止向服务器发请求
