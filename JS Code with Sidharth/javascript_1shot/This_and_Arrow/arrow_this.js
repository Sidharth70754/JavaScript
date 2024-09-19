const user = {
    username: "sidharth",
    price: 999,

    welcomemessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomemessage()
user.username = "mehta"
user.welcomemessage()

console.log(this);


// declare a function with the help of this 
//function chai() {
//    console.log(this.username);
//     let username = "sidharth"
// }
chai()

// declare function with the help of arrow function

const chai = () => {
    let username = "sidharth"
    console.log(this);
}
chai()



// complete arrow function

const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3,6));

// another method
const addthree = (num1, num2 , num3) => (num1 + num2 + num3)

console.log(addthree(2,4,3))

