describe("sum", function() {
    it("Sum of [4 5 6] is 5", function() {
        assert.equal(sum([4, 5, 6]), 15);
    });

});

describe("Multiply", function() {
    it(" Multiplication of  array [4,5,6] is 120", function() {
        assert.equal(multiply([4, 5, 6]), 120)
    });
})

describe("Reversing", function() {
    it("reverse of muluadam is madaulum", function() {
        assert.equal(reverse("muluadam"), "madaulum")
    })
})

describe("FilterLongWords", function() {
    it('words that has more than 3 letters in array [\'ada\',\'test\',\'mobile\',\'English\' ]  is [\'test\', \'mobile\', \'English\']', function() {
        const expected = ['test', 'mobile', 'English'];
        assert.deepEqual(filterLongWords(['ETH', 'test', 'mobile', 'English'], 3), expected);
    });
})