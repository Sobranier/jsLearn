var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        console.log("request received.");
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received.");

        response.writeHead(200, {"Content-Type": "text/plain"});

        var content = route(handle, pathname);
        response.write(content);
        response.end();
    };

    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start = start;
