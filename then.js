var thenjs = require('thenjs')
var later = function () {
  setTimeout(function () {
    console.log("Hello World");
  }, 1000);
}
//later();

//var request = require('request');
//var reqsite = function (site, cont) {
//  request('http://www.google.com', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//      console.log("get what u want") // Show the HTML for the Google homepage.
//      throw new Error('can not req google');
//      cont();
//    } else {
//      throw new Error('can not req google');
//      cont();
//    }
//  });
//};

var laterThrow = function () {
  setTimeout(function (cont) {
    console.log("Hello World throw error");
    var a = {};
    console.log(a.b.c);
    cont();
  }, 1000);
}


thenjs(function (cont) {
  laterThrow(cont);
}).catch(function (cont, error) {
    console.log("fail", error);
}).fin(function (cont, error, result) {
    console.log("fin", error, result);
    cont();
});

