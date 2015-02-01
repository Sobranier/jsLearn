var exec = require("child_process").exec;

function start() {
      console.log("Request handler 'start' was called.");
      var content = "empty";

      exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
      });

      return content;

      /*
        function sleep(milliSeconds) {
            var startTime = new Date().getTime();
            while (new Date().getTime() < startTime + milliSeconds);
        }

        sleep(2000);


      return "HELLO START";
      */
}

function upload() {
      console.log("Request handler 'upload' was called.");
      return "HELLO UPLOAD";
}

exports.start = start;
exports.upload = upload;
