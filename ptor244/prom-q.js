var q = require('q');


function delayMultiply(mul) {
	var res = null;
	var deferred = q.defer();
	setTimeout(function() {
		res = 2*mul;
		if(res > 0) {
			deferred.resolve(res);	
		}
		else {
			deferred.reject(0);
		}
	}, 4000);
	return deferred.promise;
}

// console.log(delayMultiply());

delayMultiply(0).then(function(result) {
	console.log('Result = ' + result);
}, function(result) {
	console.log('Reject = ' + result)
});