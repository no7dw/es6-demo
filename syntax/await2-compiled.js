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
            return laterQuoteError('fail');

          case 4:
            _context.t1 = _context.sent;

            _context.t0.log.call(_context.t0, _context.t1);

            _context.t2 = console;
            _context.next = 9;
            return laterQuoteError('succeed');

          case 9:
            _context.t3 = _context.sent;

            _context.t2.log.call(_context.t2, _context.t3);

            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t4 = _context['catch'](0);

            console.log('########get a error in main end');
            throw new Error(_context.t4);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 13]]);
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

function laterQuoteError(type) {

  return new Promise(function (resolve, reject) {
    console.log("Hello World from ", type);
    setTimeout(function () {
      if (type == 'succeed') resolve("there will be hope if try");else if (type == 'fail') reject(new Error("no quote"));
    }, getRandomIntInclusive(100, 1000));
  });
}

;

console.log('start');

main().catch(function (e) {
  console.log('##########get a error in outside end'); //this is will NOT log out, why
});
