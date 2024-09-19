const useremail = [];
if (useremail){
    console.log("got user email");
}
else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0 , -0, bigint 0n, "", null, undefined, NaN

// Truthy values
// "0", 'false', " ",[], {},function(){}

//   if (useremail.length === 0) {
//     console.log("Array is empty");
// }

// if object is empty

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Array is empty");
}

// nullish coalescing operator (??): null, undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
val1 = undefined ?? 10;
console.log(val1);


// terniary operator
// condition ? true : flase

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")