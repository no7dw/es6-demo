'use strict';

var s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x))

for (let i of s) {
    console.log(i)
}

for ( let item of s.keys() ){
  console.log(item);
}
