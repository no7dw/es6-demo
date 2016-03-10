var express = require('express');
var app = express();
// single line arrow functions do not require braces or the "return" keyword
app.get('posts', (req, res) => res.render('/posts.html') );

// multi line arrow functions require braces
app.get('posts', (req, res) => {
    console.log('in post route');
    res.render('/posts.html');
  }
);
app.get('/', (req, res) =>{
    res.send('Hello world');
});

var server = app.listen(3000, () => {
  var host = 'localhost';
  var port = server.address().port ;

  console.log('Example app listening at http://%s:%s', host, port);
});
