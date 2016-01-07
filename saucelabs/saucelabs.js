function delayAndPrint(msec, msg) {
	browser.sleep(msec).then(function() {
		console.log('Printing ' + msg)
	});
	
}

module.exports = {
	delayAndPrint: delayAndPrint
}