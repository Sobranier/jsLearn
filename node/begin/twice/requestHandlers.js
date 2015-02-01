var querystring = require("querystring");

function start(response, postData) {
    console.log('Handler "start" was called');


    function sleep(timer) {
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + timer);
    }

    sleep(5000);

    return "Hello Start Page";
}
function fuc(response, postData) {
    console.log('!!!!!!!!!!');
    var body = '<html>' +
                '<head>' +
                '<meta http-equiv="Content-Type" content="text/html; '+
                'charset=UTF-8" />'+
                '</head>'+
                '<body>'+
                '<form action="/upload" method="post">'+
                '<textarea name="text" rows="20" cols="60"></textarea>'+
                '<input type="submit" value="Submit text" />'+
                '</form>'+
                '</body>'+
                '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('Handler "upload" was called');

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload" + postData);
    querystring.parse(postData).text;
    response.end();
}


var exec = require("child_process").exec;
function test(response, postData) {
    console.log('This is the "TEST" page');

    var content = "empty";

    exec("ls -alh", {timeout:10000, maxBuffer:20000*1024 }, function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}


exports.start = start;
exports.upload = upload;
exports.test = test;
exports.fuc = fuc;
