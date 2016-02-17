describe('Navigate to different page', function() {
	beforeEach(function() {
		browser.get('https://www.google.com');
		browser.sleep(3000);
	});	

	it('take the google screenshot', function() {
		expect(true).toBe(true);
	});
});

describe('Navigate to yahoo page', function() {
	beforeEach(function() {
		browser.get('https://www.yahoo.com');
		browser.sleep(3000);
	});	

	it('take the yahoo screenshot', function() {
		expect(true).toBe(true);
	});
});

describe('Navigate to apple page', function() {
	beforeEach(function() {
		browser.get('https://www.apple.com');
		browser.sleep(3000);
	});	

	it('take the apple screenshot', function() {
		expect(true).toBe(true);
	});

	// it('take the apple screenshot 2', function() {
	// 	expect(true).toBe(true);
	// });

	
});