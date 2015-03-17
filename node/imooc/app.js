var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('Sterted on port' + port);

app.get('/', function(req, res) {
    res.render('index', {
        title: '首页'
    });
});

app.get('/list', function(req, res) {
    res.render('list', {
        title: '列表'
    });
});

app.get('/detail', function(req, res) {
    res.render('detail', {
        title: '详情'
    });
});

app.get('/admin', function(req, res) {
    res.render('admin', {
        title: '首页'
    });
});



