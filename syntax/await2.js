function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function laterQuoteError(type) {

  return new Promise(function (resolve, reject) {
    console.log("Hello World from ", type);
    setTimeout(function () {
      if (type == 'succeed')
        resolve("there will be hope if try");
      else if (type == 'fail')
        reject(new Error("no quote"));
    }, getRandomIntInclusive(100,1000));

  })
}

async function main() {
  try {
    console.log(await laterQuoteError('fail'));
    console.log(await laterQuoteError('succeed'));//this line of code will not run
  }
  catch (e) {
    console.log('########get a error in main end');
    throw new Error(e);
  }
};

console.log('start');

main()
  .then((value) => {
  console.log('##########outside normal end');
})
  .catch((e) => {
  console.log('##########get a error in outside end');
})
