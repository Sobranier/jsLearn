var koa = require('koa');
var app = koa();
var parse = require('co-body');
var fs = require('fs');

app.use(responseTime());
app.use(upperCase());

app.use(function* (next) {
    if (this.path !== '/') return yield next;

    //this.body = fs.createReadStream('package.json');
    this.body = '首页';
});

app.use(function* decorator(function (subapp) {
    //this.body = 'Hello World';
    yield* subapp;
}));

app.use(function* subapp(next) {
    this.response.body = 'hello world';
});

function responseTime() {
    return function* (next) {
        var start = new Date;
        yield next;
        var ms = new Date - start;
        var ress = `X-Response-Time: ${ms} ms`;
        this.set('X-Response-Time', ms + 'ms');
        console.log(ress);
    }
}

function upperCase() {
    return function* (next) {
        var start = new Date;
        yield next;
        var ms = new Date - start;
        console.log('%s %s - %s', this.method, this.url, ms);
    }
}

app.listen(3001);
