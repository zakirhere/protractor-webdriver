var _ = require('underscore');

browser.ignoreSynchronization = true;
describe('Yahoo finance', function() {
	beforeEach(_.once(function() {
		browser.get('https://finance.yahoo.com');
	}));

	it('Verify the homepage of yahoo finance', function() {
		expect($('#UHSearchBox').isPresent()).toBe(true);
	});

	describe('When "YHOO" quote is requested', function() {
		beforeEach(_.once(function() {
			$('#UHSearchBox').sendKeys('YHOO');
			$('#UHSearchProperty').click();
			// expect($('div.title').isPresent()).toBe(true);			
		}));

		it('verify the charts link', function() {
			// browser.sleep(3000);
			expect(element(by.css('div.title')).getText()).toContain('Yahoo! Inc. (YHOO)');
		});

		describe('WHen side links are visible', function() {
			beforeEach(_.once(function() {
				element(by.cssContainingText('a', 'Interactive')).click();		
				browser.sleep(3000);
			}));
		
			it('then verify links on the "interactive" charts', function() {
				expect(element(by.tagName('svg')).isPresent()).toBe(true);	
				// expect(element(by.tagName('svg')).isDisplayed()).toBe(true);
			
			});

			it('then verify the SVG graph is loaded', function() {
				// expect(element(by.tagName('svg')).isPresent()).toBe(true);
				expect(element(by.tagName('svg')).isDisplayed()).toBe(true);
			});

			describe('WHen SVG is loaded', function() {
				var toggler = $('div.virgo-log-toggle');
				beforeEach(function() {
					//browser.sleep(4000);
					expect(toggler.isPresent()).toBe(true);				
				});

				it('then switch the log axis from "linear" to "log"', function() {
					// browser.sleep(3000);
					toggler.click();
					expect(toggler.getText()).toContain('Log');
				});

				it('then switch the log axis from "log" to "linear"', function() {
					toggler.click();
					// browser.sleep(3000);
					expect(toggler.getText()).toContain('Linear');
				});
			});
		});
	});
});