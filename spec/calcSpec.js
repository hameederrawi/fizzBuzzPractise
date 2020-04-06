describe("My fizzBuzz function", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        it("should exist", function() {
            expect(fizzbuzz).toBeDefined();
        });
    

    it("should return Fizz when called as fizzBuzz(17)", function() {
            var result = fizzBuzz(17)
            expect(result).toBe("Fizz");
        });
    
         
    
    });

});