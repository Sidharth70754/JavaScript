// create function

function saymyname() {
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
}

saymyname();

//function addTwoNumber(number1, number2) {
//    console.log(number1 + number2);
// }

addTwoNumber(3, 4)

// another method 

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addTwoNumber(3,5)
console.log("result: ", result);


function loginusermessage(username){
    return  `${username} just logged in `
}
console.log(loginusermessage("Sidharth"))


function calculatecartprice(...num1){
     return num1
}

console.log(calculatecartprice(200, 400, 500))



const user = {
    username: "Sidharth",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)



const mynewarray = [200, 400, 100, 600]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(mynewarray));
















