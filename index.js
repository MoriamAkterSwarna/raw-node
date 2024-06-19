/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
// setTimeout(() =>{
//     console.log('test')
// }, 2000)

// var a =5 ;
// console.log(global)  // global is equivalent to window

// console.log(global.a) // undefined

// console.log(__dirname)
// console.log(__filename)

const lodash = require('lodash');
const people = require('./people.js');

// const _ = require ('lodash')
// console.log(_.last(people.people))
console.log(lodash.last(people.people));

// console.log(people)

// multiple items access
// console.log(people.people)
// console.log(people.a)
// people.test()
