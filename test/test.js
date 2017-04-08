'use strict'

var fizzBuzz = require('../fizzBuzz.js');
var apGp = require('../ap-gp.js');
var getPrime = require('../getPrime.js');


//test for fizzBuzz
describe("FizzBuzz Output", function() {
it("should return 'Fizz' for number divisible by 3", function() {
    expect(fizzBuzz.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return 'Buzz' for number divisible by 5", function() {
    expect(fizzBuzz.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return 'FizzBuzz' for 15", function() {
    expect(fizzBuzz.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return 'FizzBuzz' for 45", function() {
    expect(fizzBuzz.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return 'FizzBuzz' for 90", function() {
    expect(fizzBuzz.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return 'Fizz' for 63", function() {
    expect(fizzBuzz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 'FizzBuzz' for 93", function() {
    expect(fizzBuzz.fizzBuzz(93)).toBe('Fizz');
  });

  it("should return 'FizzBuzz' for 95", function() {
    expect(fizzBuzz.fizzBuzz(95)).toBe('Buzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz.fizzBuzz(101)).toBe(101);
  });
 })

//test for arithmetic-geometric
describe("Arithmetic Functionality", function() {
      it("should return 'Arithmetic' for [2, 4, 6, 8, 10]", function() {
        expect(apGp.aritGeo([2, 4, 6, 8, 10])).toBe('Arithmetic');
      });

      it("should return 'Arithmetic' for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(apGp.aritGeo([5, 11, 17, 23, 29, 35, 41])).toBe('Arithmetic');
      });

      it("should return 'Arithmetic' for [15, 10, 5, 0, -5, -10]", function() {
        expect(apGp.aritGeo([15, 10, 5, 0, -5, -10])).toBe('Arithmetic');
      });
      it("should return 'Geometric' for [2, 6, 18, 54, 162]", function() {
        expect(apGp.aritGeo([2, 6, 18, 54, 162])).toBe('Geometric');
      });

      it("should return 'Geometric' for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(apGp.aritGeo([0.5, 3.5, 24.5, 171.5])).toBe('Geometric');
      });

      it("should return 'Geometric' for [−128, 64, −32, 16, −8]", function() {
        expect(apGp.aritGeo([-128, 64, -32, 16, -8])).toBe('Geometric');
      });
     it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(apGp.aritGeo([1, 2, 3, 5, 8])).toBe(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(apGp.aritGeo([1, 3, 6, 10, 15])).toBe(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(apGp.aritGeo([1, 8, 27, 64, 125])).toBe(-1);
      });
      it("should return 0 for an empty array", function() {
        expect(apGp.aritGeo([])).toBe(0);
      });
 })

//test for the prime numbers
describe("Prime Numbers Generator", function() {
      it("should return [] for -2", function() {
        expect(getPrime.getPrimes(-2).length).toBe(0);
      });

      it("should return [] for 0", function() {
        expect(getPrime.getPrimes(0).length).toBe(0);
      });

      it("should return [] for 1", function() {
        expect(getPrime.getPrimes(1).length).toBe(0);
      });
      it("should return [2] for 2", function() {
        expect(getPrime.getPrimes(2).length).toBe(1);
      });

      it("should return [2,3] for 3", function() {
        expect(getPrime.getPrimes(3).length).toBe(2);
      });

      it("should return [2,3] for 4", function() {
        expect(getPrime.getPrimes(4).length).toBe(2);
      });
      it("should return [2,3,5] for 5", function() {
        expect(getPrime.getPrimes(5).length).toBe(3);
      });

      it("should return [2,3,5] for 6", function() {
        expect(getPrime.getPrimes(6).length).toBe(3);
      });

      it("should return [2,3,5,7] for 8", function() {
        expect(getPrime.getPrimes(8).length).toBe(4);
      });
      it("should return 'Invalid number' for 'notANumber'", function() {
        expect(getPrime.getPrimes(['notANumber'])).toBe('Invalid number');
      });
 })