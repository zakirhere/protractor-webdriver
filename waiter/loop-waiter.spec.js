var EC = protractor.ExpectedConditions;

describe('Should wait in loop', function() {
	beforeEach(function() {
		browser.get('https://dl.dropboxusercontent.com/u/13832522/webdriver/waiter-prac.html');
	});

	it('should wait until the page is loaded', function() {
		waitPresent($('#show'), 5);
		// browser.sleep(3000);
		// waitPresent($('#msg1'));
	});

	it('handle timeout error gracefully', function() {

	});
});

function waitPresent(elm, count) {	

	browser.wait(EC.visibilityOf(elm), 100, 'not displayed').then(null, function() {
		console.log('Waiting for elm ' + count--);
		browser.sleep(1000);
		if(count>0)
			waitPresent(elm, count);
	});
}