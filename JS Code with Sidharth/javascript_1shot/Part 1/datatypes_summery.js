// primitive data types
// 7 types : string, number, boolean, null,  undefined, symbol.


const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let useremail = undefined

const id = symbol('123')
const anotherid = symbol('123')





// reference (non-primitive data types)
// array, objects, function



const heros = ["shaktiman", "naagraj" ,"doga"]
let myobj ={
    name: "sidharth",
    age: 20,
}

const myfunction  = function() {
    console.log("hello world");
}

console.log(typeof myfunction)
