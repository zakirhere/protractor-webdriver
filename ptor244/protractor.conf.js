/**
 * @author Zakir Sayed
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    sauceUser: "zakirhere",
    sauceKey: "22adc0d1-780d-4564-b722-9e4cb5ebb5a8",

    // sauceUser: "sayedz_marquee",
    // sauceKey: "78166c78-f8e4-4b55-8542-fbe17231af12",
    // multiCapabilities: [ {
    //     'browserName': 'chrome',
    //     'browserName': 'firefox ',
    //     'browserName': 'internet explorer'
    // }],

    capabilities: {
        'browserName': 'chrome',
        // 'build': 12345,
        'name': 'SL load test',
        // 'phantomjs.binary.path': require('phantomjs').path,
        // 'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },


    specs: ['./**/*.spec.js'],


    onPrepare: function() {
        browser.ignoreSynchronization = true;
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
};
