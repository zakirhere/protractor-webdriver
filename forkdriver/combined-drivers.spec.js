var _ = require('underscore');

ddescribe('When both browsers are loaded', function() {
// var $ = browser.element;
var $2, $$2;
	beforeEach(_.once(function() {
		browser2 = browser.forkNewDriverInstance();			
		browser2.ignoreSynchronization = true;
		$2 = browser2.$;
		$$2 = browser2.$$;
	}));

	it('navigates on browser one', function() {
		browser.get('https://dl.dropboxusercontent.com/u/13832522/forkdriver/prac.html');
	});

	it('navigates on browser two', function() {
		browser2.get('https://dl.dropboxusercontent.com/u/13832522/forkdriver/prac.html');
	});

	describe('Save a text', function() {

		it('enter different values in both the browsers', function() {
			var element2 = browser2.element;
			enterInformation(browser2, 'Second browser');			
			enterInformation(browser, 'First browser');			
		});

		it('verify the values on both the browsers', function() {
			validateValues(browser, 'First');
			validateValues(browser2, 'Second');
			// expect($('#history').getText()).toContain('First');
			// expect($2('#history').getText()).toContain('Second');
		});

		it('just wait for the actions to complete', function() {
			browser.sleep(1000);
			browser2.sleep(1000);
		});
	});

});

var enterInformation = function(that, data) {
	this.element = that.element;

	element(by.id('msg')).sendKeys(data);
	element(by.id('save')).click();
}

function validateValues(that, data) {
	this.element = that.element;
	expect($('#history').getText()).toContain(data);
}