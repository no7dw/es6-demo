var express = require('express');
var router = express.Router();
// require our module
var Greeter = require("../lib/greet.js");
// call the sayHello function
var greeting = new Greeter('Jeff').sayHello();
 
/* GET home page. */
router.get('/', function(req, res) {
  // display the greetings as the title of the app
  res.render('index', { title: greeting });
});
express.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 
module.exports = router;
