关于视口这部分还有一些信息

1、CSS像素、设备像素
2、screen.width/height 屏幕尺寸，ie7、8下用css计数，其他用设备像素
3、window.innerWidth/Height 窗口尺寸，ie7不支持，旧opera使用设备像素
4、windo.pageXOffset/YOffset 滚动距离
5、document.documentElement.clientWidth/Height 视口大小
6、docuemnt.documentElement.offsetWidth/Height HTML大小，IE异常为viewport大小


超时调用和间歇调用的问题：
间歇的问题在于可能会在前一个间歇调用结束之前启动。

对话框的开发是同步、模态的，所以显示的时候代码会停止执行。
alert
confirm
prompt

location的一些常用属性可以注意下：
hash、host、hostname、href、pathname、port、protocal、search
可以直接修改，每次修改除了hash以外的属性，都会重新加载url
还有两个相关的location.replace(XXX)用来禁用后退,location.reload();location.reload(true);可以从服务器加载

注意：在ajax中用过，拼url时候要先编码encodeURIComponent，在获取url的过程中要解码decodeURIComponent

navigator对象和检测插件
navigator.plugins.length

//后退一页
history.go(-1);
//前进两页
history.go(2);

history.go("google.com");//跳转到最近包含google.com的界面
history.back();
history.forward();

if(history.length == 0){}//判断是不是打开的第一个界面 
