// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myTimeStamp  = Date.now()
console.log(myTimeStamp);


// time in seconds
console.log(Math.floor(Date.now()/1000));


// to get only months, year , and Day
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
