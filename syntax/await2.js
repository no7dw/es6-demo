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
      if (type == 'succeed')
        resolve("there will be hope if try");
      else if (type == 'fail')
        reject(new Error("no quote"));
    }, getRandomIntInclusive(100,1000));

  })
}

async function main() {

  try {
    //console.log(await getQuote('throw'));
    console.log(await getQuote('fail'));
    //console.log(await getQuote('succeed'));

  }
  catch (e) {
    console.log('########get a error in main end');
    throw new Error(e);
    //return new Promise(function (resolve, reject) { reject(new Error(e));});
  }
};

console.log('start');
//try {
//  main();
//}catch (e) {
//  console.log('##########get a error in outside end');//this is will NOT log out, why
//}

main()
  .catch((e) => {
  console.log('##########get a error in outside end');//this is will NOT log out, why
})
console.log('Ron once said,');
