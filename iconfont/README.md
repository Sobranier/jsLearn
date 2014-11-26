iconfont的使用一般有两种途径（如果不用网络上的iconfont库）

在自己使用的过程中有两种情况：

1、html中直接指定字符，这种途径没有太多兼容问题，但是需要开发人员手动填写内容

<i class="icon">&#xE001;</i>

2、在css中填写，然后开发人员直接调用类名，问题是ie6\7兼容性

<style>
    .icon-userinfo:before{content:'\e001';}
</style>
<i class="icon icon-userinfo"><i>

为了解决兼容性问题，通常会使用js来替换内容，插入到节点中

//iconfont.js:
M.iconFontDatabase = {
    'icon--userinfo':'&#e001'
}
//init.js:
window.onload = function () {
    Y.all('.icon').each(function (nd) {
        nd.set('innerHTML', M.iconFontDatabase[nd.get('className')])
    });
}

解决方式还有其他，这里引出一个对于低版本ie伪类的解决方案：

http://stackoverflow.com/questions/4181884/after-and-before-css-pseudo-elements-hack-for-ie-7


天猫使用的是方法一，我觉得也可以这么做，用js再替换掉所有的字符内容。

http://www.w3help.org/zh-cn/causes/RF1001

各浏览器对iconface字体的支持情况
