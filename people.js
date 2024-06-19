/* eslint-disable prettier/prettier */
// (function(exports,require,module,__dirname,__filename,){

const people = ['sakib', 'tamim', 'mushfiq'];

const a = 19;
function test() {
    console.log('test');
}
// console.log(module)
//  module.exports = people;  // give the access to other file to use this

// multiple exports
module.exports = {
    // invisible returns
    people,
    a,
    test,
};

//  return module.exports  // invisibly returns

// })

//  (function (){
//      var a = 5;  // it won't be accessible outside this iife
//  })()  // this function is called IIFE
