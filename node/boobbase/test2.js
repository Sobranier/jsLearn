var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name: 'yanweiqing',
    email: 'yanweiqing@yunshanmeicai.com',
    address: 'beijing.china',
});

var options = {
    host: 'www.yanweiqing.com',
    path: '/application/node/post.php',
    methods: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': contents.length
    }
};

var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
})

req.write(contents);
req.end
