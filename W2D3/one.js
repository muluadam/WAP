x = 1;
a = 5;
var b = 10;
var c = function(a, b, c) {
    // var x;
    console.log(x);
    console.log(a);
    var f = function(a, b, c) {
        var x;
        b = a;
        console.log(b);
        b = c;
        var x = 5;

    }
    f(a, b, c)
    console.log(b);
    var x = 10;
}
c(8, 9, 10)
console.log(b)
console.log(x);