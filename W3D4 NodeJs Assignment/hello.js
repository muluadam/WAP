const readline = require('readline');
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
read.question('What is your name? ', function (name) {
    console.log(`Welcome ${name}`);
    read.question("How old are you?  ", age => {
        if (age > 16) {
            console.log("You’re allowed to get a drivers license in IOWA!!");
        } else {
            console.log("you are not allowed to drive in IOWA!!");
        }
        read.close();
    })
});
