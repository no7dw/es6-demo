'use strict';

var main = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = console;
            _context.next = 4;
            return getQuote('fail');

          case 4:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t2 = _context['catch'](0);

            console.log('########get a error in main end');
            throw new Error(_context.t2);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function main() {
    return ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var request = require('request');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote(type) {
  var quote;

  return new Promise(function (resolve, reject) {
    console.log("Hello World from ", type);
    setTimeout(function () {
      //if (type == 'throw')
      //  throw new Error("no response from server");//this line of code will crash, if throw, why
      if (type == 'succeed') resolve("there will be hope if try");else if (type == 'fail') reject(new Error("no quote"));
    }, getRandomIntInclusive(100, 1000));
  });
}

//return new Promise(function (resolve, reject) { reject(new Error(e));});
;

console.log('start');
//try {
//  main();
//}catch (e) {
//  console.log('##########get a error in outside end');//this is will NOT log out, why
//}

main().catch(function (e) {
  console.log('##########get a error in outside end'); //this is will NOT log out, why
});
console.log('Ron once said,');
