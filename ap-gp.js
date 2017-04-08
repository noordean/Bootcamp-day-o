'use strict'

module.exports.aritGeo = function(arr){
	var initiaLCommonDiff = arr[1]-arr[0];
	var finalCommonDiff = arr[arr.length-1]-arr[arr.length-2];
	var initialCommonRatio = arr[1]/arr[0];
	var finalCommonRatio = arr[arr.length-1]/arr[arr.length-2];
	if(arr.length===0){
		return 0;
	}
	else if(initiaLCommonDiff==finalCommonDiff){
		return "Arithmetic";
	}
	else if(initialCommonRatio==finalCommonRatio){
		return "Geometric";
	}
	else{
		return -1;
	}
}