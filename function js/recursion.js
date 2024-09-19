// recursion 
// base condition 

function recurse() {
    if (base_condition) {
        return ;
    }
    recurse();
}

function fetchwater(count){
    if (count === 0){
    console.log('no more water left');
    return;
}
    console.log('fetch water');
    fetchwater(count -1);
}
fetchwater(5);
