express = require('express');

app = express();

app.get('/', function(req, res){
    res.send('FUCK');
});

app.listen(3000, function() {
    console.log('listen at 3000');
});

