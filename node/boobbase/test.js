var a = 1;
var b = 'world';
var c = function (x) {
    console.log('hello' + x + a);
}
c(b);

console.log(process.argv);

/*
process.stdin.resume();

process.stdin.on('data', function (data) {
    process.stdout.write('read from console: ' + data.toString());
});
*/

var util = require('util');
function Base() {
    this.name = "base";
    this.base = 1991;
    this.sayHello = function () {
        console.log('hello' + this.name);
    }
}
Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

