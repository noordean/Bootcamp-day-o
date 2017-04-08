'use strict'

module.exports.getPrimes = function(n){
	var primes = [];
	if(isNaN(n)){
		return "Invalid number";
	}
	else if(n<2){
		return [];
	}
	else{
		for(var k=2;k<(n+1);k++){
			if(isPrime(k)){
				primes.push(k);
			}
		}
	}
	return primes;

	function isPrime(num){
		var check = [];
		for(var j=2;j<num;j++){
			if(num%j==0){
				check.push(j);
			}
		}
		if(check.length>0){
			return false;
		}
		else{
			return true;
		}
	}
}