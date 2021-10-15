 
const readline = require('readline');
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let number = 0;
function getNumber(){
    read.question("Enter Number to add or enter stop: ", (num)=>{
        if(num === "stop"){
            console.log("the sum is: "+ number);
            read.close();
        }else{
            let n = parseInt(num);
            if(isNaN(n)){
                n = 0;
            }
            number = number + n;
            getNumber();
        }
    })
};
getNumber();

