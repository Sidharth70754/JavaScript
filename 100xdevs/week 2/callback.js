function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumofSomething(a,b, callbackfn){
    let square1 = callbackfn(a);
    let square2 = callbackfn(b);
    return square1 + square2;
}

let ans = sumofSomething(1,2, square);
console.log(ans);


// another method 

function sumofsquare(x,y){
    let square1 = square(x);
    let square2 = square(y);
    return square1 + square2;
}

let answ = sumofsquare(2,2);
console.log(answ);