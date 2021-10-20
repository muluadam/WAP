const PI = Math.PI;

function addition(a,b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    if(b === 0){
        return "undefined";
    }
    else{
        return a/b;
    }
}

module.exports = {
    pi:PI,
    add: addition,
    subtract: subtraction,
    multiply: multiplication,
    divide:division,
   
}