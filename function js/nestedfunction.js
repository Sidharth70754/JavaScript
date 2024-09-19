function outer(){
    console.log('outer');
    function inner(){
        console.log('inner');
}
    inner();
}

outer();

// 1st principal 
// you can run the console command inside the function. not outside the function

function dosomething () {
    let x = 10;
    const y = 30;
    var z = 20;

    console.log(x, y, z);
}
dosomething();
// this is a right way to do 1st principle

// 2nd principal
// in any of variable define you can excess in the function .

let x = 10;
const y = 30;
var z = 20;

function dosomethings(){
    console.log(x, y, z);
}

dosomethings();




















