// singleton 
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id  = "123abc"
tinderUser.name = "Sidharth"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Sidharth",
            lastname: "Mehta"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
   {
    id: 1,
    email: "test@example.com"
   },
   {
    id: 1,
    email: "test@example.com"
   },
   {
    id: 1,
    email: "test@example.com"
   },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



// objects destruction and JSON API 

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseinstructor: "Sidharth"
}
const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);


// API in JSON format
// {
//    "name": "Sidharth",
//    "email": "sidharth@gmail.com",
//    "price": "free"
// } 