// string in javascript

const name = "sidharth"
const repocount = 50
// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const  gamename = new String ('sidharth mehta')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

// sub string 
const newString = gamename.substring(0,4)
console.log(newString);

// slice
const anotherString = gamename.slice(-8,4)
console.log(anotherString);

// trim 
const newStringOne = "           sidharth       "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace
const url = "https://sidharth.com/mehta$29sidharth"
console.log(url.replace('$29','-'));

// include 
console.log(url.includes('sidharth'));

// split function 
console.log(gamename.split('-'));