function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var laterError = function(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        var a = {};
        console.log(a.b.c);//simulate an error :TypeError: Cannot read property 'c' of undefined
        resolve(a);
      }catch(e) {
        reject(e)//TypeError: Cannot read property 'c' of undefined
      }
    }, 100);
  });
};

laterError().then(function(value) {
  // success
  console.log('success value', value);
}, function(value) {
  // failure
  console.log('failure value', value);
});

console.log('Hi!');