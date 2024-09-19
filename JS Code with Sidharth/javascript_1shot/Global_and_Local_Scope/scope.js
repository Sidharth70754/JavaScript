let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}
console.log(a);


function one() {
    const username = "Sidharth"

    function two() {
        const website = "youtube"
        console.log(username);
}
    two()
}
one()


// *****************INTRESTING*****************

function addone(num) {
    return num + 1
}
console.log(addone(5));


const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5));

