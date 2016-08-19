var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function() {
    console.log('server running on port: ', PORT);
})
