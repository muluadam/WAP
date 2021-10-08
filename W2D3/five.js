 var foo = 1;

 function bar() {
     console.log(foo);
     // console.log(!foo);
     if (!foo) {
         const foo = 10;
     }
     console.log(foo);
 }
 bar();