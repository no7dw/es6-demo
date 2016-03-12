var request = require('request');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var laterError = function(){
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      try {
        var a = {};
        console.log(a.b.c);
        resolve('a');
      }catch(e) {
        reject(e)
      }

    }, 100);
  });
};

async function main() {
  try {
   await laterError(); //still crash
  }
  catch (e) {
    console.log('get a error in main end');
    throw new Error(e);
  }
};

console.log('start');

main()
  .catch((e) => {
  console.log('##########get a error in outside end');//this is will NOT log out, why
});

console.log('Ron once said,');
