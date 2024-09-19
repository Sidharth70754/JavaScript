// IIFE (Immediately Invoked Function Expressions)


(function chai() {     // named IIFE
    console.log(`DB CONNECTED`);
})();

(function cahiaurcode() {
    console.log(`DB CONNECTED TWO `);
})();


// with the help of arrow function 

( (name) => {
    console.log(`Sidharth ${name}`);
})('mehta')