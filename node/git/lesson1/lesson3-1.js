var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function (req, res, next) {
    superagent.get('http://www.yunshanmeicai.com')
    .end(function(err, sres){
        if (err) {
            return next(err);  
        }
        var $ = cheerio.load(sres.text);
        //console.log($);
        var items = [];
        $('.site-subtitle').each(function(idx, element){
            var $element = $(element);  
            console.log($(element).text());
            items.push({
                content: $element.text()
                //title: $element.attr('title'),
                //href: $element.attr('href')
            });
        });
        res.send(items);
    });
});

app.listen(3000, function(req,res){
    console.log('iiiii');
});
