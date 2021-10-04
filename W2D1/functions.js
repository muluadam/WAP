 const sum = function(nums) {
     return nums.reduce((acc, ele) => acc + ele);
 }
 const multiply = function(nums) {
     return nums.reduce((acc, ele) => acc * ele)
 }

 function reverse(str) {
     return str.split('').reduce((acc, curr) => curr + acc, "");
 }

 function filterLongWords(arr, i) {
     return arr.filter((e) => e.length > i);
 }