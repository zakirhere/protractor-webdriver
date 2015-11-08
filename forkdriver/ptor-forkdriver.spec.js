describe('Forkdriver POC using wix', function() {
	beforeEach(function() {
	 	browser.sleep(1000);
		expect(element(by.id('msg')).isPresent()).toBe(true);	
	});

	it('then wait for the page to load', function() {
		expect(element(by.id('history')).isPresent()).toBe(true);	
	});

	it('then wait for 5 secs and enter a text', function() {
		$('#msg').sendKeys('save');
		$('#save').click();
	});

	it('validates the div contains the text', function() {
		expect($('#history').getText()).toContain('save');
	})

	it('Wait to see the results', function() {
		browser.sleep(5000);
	});

	describe('Start the 2nd browser', function() {
		var browser2;
		it('starts the browser', function() {
			browser2 = browser.forkNewDriverInstance();
			browser2.ignoreSynchronization = true
			browser2.get('https://dl.dropboxusercontent.com/u/13832522/forkdriver/prac.html');
			browser2.sleep(2000);
		});

		it('browser2 page load', function() {
			browser2.element(by.id('msg')).sendKeys('Second');
			browser2.element(by.id('save')).click();			
		});

		it('Wait to see the results', function() {
			browser2.sleep(5000);
		});		
	});
});