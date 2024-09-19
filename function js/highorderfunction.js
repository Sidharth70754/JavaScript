// HDF 
// high order function 
//1. it takes one or more function as argument 
//2. it may return a function 

function getcapture(camera){
    camera();
}

getcapture(function(){
    console.log('canon');
})

function returnFn() {
    return function() {
        console.log('returning');
    }
}

const fn = returnFn();

fn();

