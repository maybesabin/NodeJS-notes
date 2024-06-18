//Callback functions are basically functions that call another function

function callback(){
    console.log("Task Done")
}

const add = function(a,b,callback){
    var sum = a+b;
    console.log(sum)
    callback()
}

add(2,4,callback)


//File system & OS

var fs = require('fs')
var os = require('os')
var username = os.userInfo().username

//file .append('file name', 'message', 'callback function')
fs.appendFile('greeting.txt','hello '+username+'!',()=>{
    console.log('file created')
})