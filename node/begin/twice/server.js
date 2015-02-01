var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(req, res) {
        var postData = "";
        console.log("Request receive");

        req.setEncoding("utf8");

        req.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("PostData '" + postDataChunk + "'.");
        });

        req.addListener("end", function(){
            route(handle, url.parse(req.url).pathname, res, postData);
        });

        console.log("-----PathName-----:" + url.parse(req.url).pathname);
        console.log("-----Query-----:" + url.parse(req.url).query);
        //console.log("-----String-----:" + querystring(req.url)["hello"]);


    }

    http.createServer(onRequest).listen(8889);
    console.log('Server Started');
}

exports.start = start;
