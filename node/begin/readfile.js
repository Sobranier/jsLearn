var fs=require('fs');
fs.readFile('requestHandlers.js', 'utf-8', function(err, data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
console.log('end.');
