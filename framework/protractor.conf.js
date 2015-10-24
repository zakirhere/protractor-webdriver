/**
 * @author Zakir Sayed
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',

    sauceUser: "zakirhere",
        sauceKey: "22adc0d1-780d-4564-b722-9e4cb5ebb5a8",
//    sauceSeleniumAddress: "this is optional: default is ondemand.saucelabs.com:80/wd/hub, but localhost:4445/wd/hub is also valid for when you're running sc locally and ondemand doesn't work",
    capabilities: {
        'tunnel-identifier': 'sauce-tunnel-id',
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },



/*	multiCapabilities: [ {
		'browserName': 'chrome'
	}],*/


    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },


    specs: ['/test-functional/*.spec.js'],


    onPrepare: function() {
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            takeScreenShotsOnlyForFailedSpecs: false,
        }));
    },


    // ----- Options to be passed to minijasminenode -----
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 40000
    }
//this is dhaval test 
};
