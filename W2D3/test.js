var x = 5;
var y = 7;

function a() {
    function b() {
        console.log(`1: x=${x} y=${y}`);
        y = 10;
        return function c(y) {
            console.log(`2: x=${x} y=${y}`);
        }
    }
    console.log(`3: x=${x} y=${y}`)
    var z = b()
    var x = 10;
    z(20);
}
console.log(`4: x=${x} y=${y}`);
a();
console.log(`5: x=${x} y=${y}`);