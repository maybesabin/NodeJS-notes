const work  = require('./work.js')
var _ = require('lodash')

console.log(work.addTwoNumbers(2,4))

//lodash is a data manipulation library that makes server side coding easier
//Eg:

var data = ["hello", "hello", 1,0,1,2, "meow", "meow"]
var filter = _.uniq(data)
console.log(filter) //returns data with non repeated values
var check =  _.isString(data)
console.log(check)