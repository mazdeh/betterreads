var express = require('express');
var google = require('googleapis');

var app = express();
var PORT = process.env.PORT || 3000;

var books = google.books('v1');

app.use(express.static(__dirname + '/dist'));

// guess I have to make a RESTfil api
// how does that work witha SPA?

// maybe a different server to talk to googleapis?

app.get('/books', function(req, res) {
  var q = 'potter';
  books.volumes.list({q, maxResult: 2}, function(err, response) {
    if (err) console.log(err);
    console.log('res: ', response)
  })
  res.send();
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, function() {
    console.log('server running on port: ', PORT);
})
