var sl = require('./saucelabs');

describe('when saucelabs is used', function() {
	var i = 0;
	beforeEach(function() {
		console.log('Before Each called: ' + i++);
	});

	it('delay and print first message', function() {
		sl.delayAndPrint(2000, 'First messageA');
		sl.delayAndPrint(2000, 'First messageB');
		sl.delayAndPrint(2000, 'First messageC');
		sl.delayAndPrint(2000, 'First messageD');	});

	it('delay and print second message', function() {
		sl.delayAndPrint(2000, 'Second messageA');
		browser.pause();
		sl.delayAndPrint(2000, 'Second messageB');
	});
});
