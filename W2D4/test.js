describe("function banned word", function() {


    it("should return 'this house is nice!' when given 'This house is not nice!' with filter not", function() {
        let myString = "this house is not nice!";
        assert.equal(myString.filter("not"), "this house is nice!");
    })
})

describe("bubble sort", function() {
    it("Array Has Method", function() {
        assert.notEqual(Array.prototype.bubbleSort, undefined);
    })
    it("for allready sorted Array", function() {
        let arg = [1, 2, 3, 4, 5];
        assert.deepEqual(arg.bubbleSort(), arg);
    })


    it("should return -2, 0, 1, 3, 4, 6 when given 6,4,0, 3,-2,1", function() {
        let arg = [-2, 0, 1, 3, 4, 6];
        assert.deepEqual(arg.bubbleSort(), [-2, 0, 1, 3, 4, 6])
    })
})
describe("Inheritance", function() {
    it("Testing is there is inheritane relationship", function() {
        assert.notEqual(Teacher.prototype.describe, undefined);
    });
    it("must return valid string", function() {
        assert.equal(new Teacher("Prof").teach("Javascript"), "Prof is teaching Javascript");
    })
})