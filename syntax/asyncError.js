function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var laterError = function(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        var a = {};
        console.log(a.b.c);//simulate an error :TypeError: Cannot read property 'c' of undefined
        resolve('a');
      }catch(e) {
        console.log('reject');
        reject(e)
      }
    }, 100);
  });
};

async function main() {
  try {
   await laterError();
  }
  catch (e) {
    console.log('##########get a error in main end');
  }
};

main();
