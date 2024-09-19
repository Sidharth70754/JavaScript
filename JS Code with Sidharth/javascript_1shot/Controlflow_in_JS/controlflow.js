// if statement

const isuserloggedin = true
if (2 === "2") {
    console.log("executed");
}

// < , > , <= ,>= , == , != , ===

const temperature = 41

if (temperature < 50) {
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}


// const score = 200

// if (score > 100) {
//        let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// short hand notations

// const balance = 1000

// if(balance > 500) {
//     console.log("balance is greater then 500");
// }
// else {
//     console.log("balance is lesser then 500");
// }

// nested controlfow statements

// const balance = 1000

// if(balance <  500){
//     console.log("balance is less than 500");
// }
//   else if (balance < 750) {
//     console.log("balance is less than  750");
// }
//   else if (balance <900) {
//   console.log("balance is less than 900");
// } else {
//     console.log("balance is greater than 999");
// }


const userloggedin = true 
const debitcard  = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin && debitcard){
    console.log("allow to buy course");
}

if (loggedinfromgoogle  || loggedinfromemail) {
    console.log("user logged in");
}