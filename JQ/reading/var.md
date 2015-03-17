在解释新的内容之前，先来解读一下var这个目录下地所有的内容，这些也大多是比较简单地内容。
>ls
arr.js          concat.js       indexOf.js      push.js         slice.js        support.js
class2type.js   hasOwn.js       pnum.js         rnotwhite.js    strundefined.js toString.js

这里面的组件都比较奇怪
arr.js

define(function() {
    return [];   //返回一个空数组
});

concat.js
define([
    './arr'
],function( arr ) {
    return arr.concat;  //开始的理解是这里返回的应该是一个数组或者单个内容接到[]后面，其实大错特错了，以下和arr相关的所有模块的功能都是把空数组的方法返回了，比如这里返回的时数组的concat方法，调用的时候一般就是用concat.call(...)
});

indexOf.js
define([
    './arr'
], function( arr ) {
    return arr.indexOf;
});

push.js
define([
    './arr'
], function( arr ) {
    return arr.push;
});

slice.js

define([
    './arr'
], function( arr ) {
    return arr.slice;
});

以上都是和arr相关的，数组操作

support.js
define(function() {
    // All support tests are defined in their respective modules.
        return {};
        });

class2type.js
define(function() {
    // [[Class]] -> type pairs
        return {};
        });

hasOwn.js

define([
    "./class2type"
    ], function( class2type ) {
        return class2type.hasOwnProperty;
        });

pnum.js
define(function() {
    return (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    });

这里返回了pnum的元文本，是因为其他地方会直接以字符串的形式使用它

rnotwhite.js
define(function (){
    return (/\S+/g);  //匹配任何不适空白符的子都，并且数量至少是一个
});


strundefined.js

define(function() {
    return typeof undefined;
    });//这个的目的是什么？难道是因为不同的环境里面的undefined的取值会有不一样么？

toString.js

define([
    "./class2type"
    ], function( class2type ) {
        return class2type.toString;
        });







