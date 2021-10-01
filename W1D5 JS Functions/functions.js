 /**
  * This is  normal function
  * @param {Number} a 
  * @param {Number} b 
  * @returns the Maximum of two numbers
  */
 function max(a, b) {
     if (a > b) {
         return a;
     } else {
         return b;
     }
 }
 // const m = max(50, 8);
 // console.log(m);

 /**
  * This is anonymous function 
  * @param {Number} a 
  * @param {Number} b 
  * @param {Number} c 
  * @returns The maximum of three numbers
  */
 const maxOfThree = function(a, b, c) {
         if (a > b && a > c) {
             return a;
         } else if (a > b && a < c) {
             return c;
         } else if (a < b && b > c) {
             return b;
         }
     }
     //  const m = maxOfThere(5550, 808, 99);
     //  console.log(m);
     /**
      * 
      * @param {Char-one length string} ch 
      * @returns true if @param is vowel or false otherwise
      */
 const isVowel = function isVowel(ch) {
     if (ch.length > 1) {
         return false;
     }
     const vowels = ['a', 'e', 'i', 'o', 'u'];
     const index = vowels.indexOf(ch);
     if (index < 0) {
         return false;
     } else { return true; }
 }

 /**
  * 
  * @param {Array of Numbers} arr 
  * @returns sum of elements
  */
 const sum = function sum(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++)
         sum = sum + arr[i];
     return sum;
 }

 /**
  * 
  * @param {Array of Number} arr 
  * @returns product of Numbers
  */
 const multiply = function multiply(arr) {
         let mul = 1;
         for (let i = 0; i < arr.length; i++) {
             mul *= arr[i];
         }
         return mul;
     }
     /**
      * Mulitplay array in Functional Programming
      * @param {*} array 
      * @returns 
      */
 const multiplyFP = function multiply(array) {
     return array.reduce(function(initial, element, i, array) {
         return initial * element;
     })
 }

 /**
  * 
  * @param {String} str 
  * @returns reverse of the string input
  */
 const reverse = function reverse(str) {

         if (str.length == 0) {
             return "";
         }
         let newStr = str.charAt(str.length - 1) + reverse(str.substr(0, str.length - 1));
         return newStr;

     }
     //  console.log(reverse("muluada10m"));
     /**
      * 
      * @param {Array of String} array 
      * @returns longest one word
      */
 const findLongestWord = function findLongestWord(array) {
         if (array.length < 1)
             return null;
         let longWord = array[0];
         for (let index = 0; index < array.length; index++) {
             if (array[index].length > longWord.length) {
                 longWord = array[index];
             }
         }
         return longWord;
     }
     //const words = ["ada", "muluadam", "tmesgenakalu"];
     //  console.log(findLongestWord(words));
     /**
      * @name filterLongWords with functional programming 
      * @param {Array of String} array 
      * @param {Number} len 
      * @returns filtered array of strings that have length greater than len
      * 
      */
 const filterLongWordsFP = function filterLongWordsFP(array, len) {
     return array.filter(function(elem, i, array) {
         return elem.length > len;
     });
 }

 const filterLongWords = function filterLongWords(array, len) {
     const filterdArray = [];
     for (let index = 0; index < array.length; index++) {
         if (array[index].length > len) {
             filterdArray.push(array[index]);
         }

     }
     return filterdArray;
     //  return array.filter(function(elem, i, array) {
     //      return elem.length > len;
     //  });
 }
 const jdfiddleUpdate = function jsfiddleUpdate() {
         const a = [1, 3, 5, 3, 3];
         const b = a.map(function(elem, i, array) {
             return elem * 10;
         })
         document.writeln(b.toString() + "<br/>");
         const c = a.filter(function(elem, i, array) {
             return elem === 3;
         });
         document.writeln(c.toString() + "<br/>");
         const d = a.reduce(function(prevValue, elem, i, array) {
             return prevValue * elem;
         });
         document.writeln(d + "<br/>");
         const d2 = a.find(function(elem) { return elem > 1; }); //3
         const d3 = a.findIndex(function(elem) { return elem > 1; }); //1
         document.writeln(d2 + "<br/>");
         document.writeln(d3);
     }
     //  const a = words.filter(function(elem, i, array) {
     //      return elem.length > 8;
     //  });
     //  console.log(words.toString());
     //  console.log(a.toString());
     //  console.log(filterLongWords(words, 5));