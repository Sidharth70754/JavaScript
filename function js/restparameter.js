// rest parameter is always last parameter
// you can make only one rest parameter
// you can also make only one rest parameter that is last parameter . not make first parameter .


function collection(x, ...y){
    console.log(x);
    console.log(y);
}
collection(1,2,3,4,5,6,7,8,7,6);



function collection(x, ...y) {
    console.log(x, y);
}

collection(1,2,3,4,5,6,7,8,9);
