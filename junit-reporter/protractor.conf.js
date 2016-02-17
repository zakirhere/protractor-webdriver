/**
 * @author Zakir Sayed
 */
var HtmlReporter = require('protractor-html-screenshot-reporter');



exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // sauceUser: "zakirhere",
    // sauceKey: "22adc0d1-780d-4564-b722-9e4cb5ebb5a8",


    capabilities: {
        'browserName': 'chrome',
        'name': 'SL load test',
    },
    // framework: 'jasmine2',

    specs: ['./**/*.spec.js'],


    onPrepare: function() {
        browser.ignoreSynchronization = true;
        // Add a screenshot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            takeScreenShotsOnlyForFailedSpecs: false,
        }));
        // require('jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
        //     null, true, true, './reports/gt_')
        // );

        // var jasmineReporters = require('jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //     consolidateAll: true,
        //     savePath: 'testresults',
        //     filePrefix: 'xmloutput'
        // }));
    },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};
 