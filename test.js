'use strict'

var fizzBuzz = require('fizzBuzz.js');
var apGp = require('ap-gp.js');
var getPrime = require('getPrime.js');

describe("Arithmetic Functionality", function() {
  it("should return 2 as average for 1, 3", function() {
    var avgApp = myApp.findAverage(1,3) ;
    expect(avgApp).toBe(2);
  })
  it("should return 2 as average for 2, 4", function() {
    var avgApp = myApp.findAverage(2,4) ;
    expect(avgApp).toBe(3);
  })
 })