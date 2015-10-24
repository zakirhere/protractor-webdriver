var gulp = require('gulp');
var path = require('path');
var child_process = require('child_process');
var protractor = require('gulp-protractor').protractor;
//var webdriver = require('gulp-protractor').webdriver;
var spawn = require('child_process').spawn;

var argv = require('yargs').argv;

var SauceTunnel = require('sauce-tunnel');
var tunnel;

gulp.task('sauce-start', function(cb) {
    tunnel = new SauceTunnel("zakirhere", "22adc0d1-780d-4564-b722-9e4cb5ebb5a8", "sauce-tunnel-id");
    // >>>> Enhance logging - this function was adapted from that Node plugin for Grunt, which runs grunt-mocha-wd.js
    var methods = ['write', 'writeln', 'error', 'ok', 'debug'];
    methods.forEach(function (method) {
        tunnel.on('log:'+method, function (text) {
            console.log(method + ": " + text);
        });
        tunnel.on('verbose:'+method, function (text) {
            console.log(method + ": " + text);
        });
    });
    // <<<< End enhance logging

    tunnel.start(function(isCreated) {
        if (!isCreated) {
            cb('Failed to create Sauce tunnel.');
        }
        console.log("Connected to Sauce Labs.");
        cb();
    });
});

gulp.task('sauce-end', function(cb) {
    tunnel.stop(function() {
        cb();
    });
});


gulp.task('default', function() {
        console.log('Hello World!');
});

gulp.task('cl-test', function() {
        console.log('craigslist test.');
});

function webdriver() {
	gulp.spawn('webdriver-manager', ['start']);
};

var start = function() {
  spawn('C:/Users/zsayed/node_modules/.bin/webdriver-manager', ['start'], {
    stdio: 'inherit'
  }).once('close', '');
};

var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
    gulp.task('webdriver_standalone', webdriver_standalone);

// Setting up the test task
gulp.task('tester', function() {
    var myArgs = null;
    if(argv.suite == null || argv.suite == 'functional') {
        myArgs = './test-functional/*.spec.js';
    }
    else if(argv.suite == 'monitoring') {
        myArgs = './test-monitoring/*.spec.js';
    }
    console.log(myArgs);
    gulp.src(myArgs)
        .pipe(protractor({

        }));
});

gulp.task('sauce-test', ['sauce-start'], function () {
    var myArgs = null;
    if(argv.suite == null || argv.suite == 'functional') {
        myArgs = './test-functional/*.spec.js';
    }
    else if(argv.suite == 'monitoring') {
        myArgs = './test-monitoring/*.spec.js';
    }

    gulp.src(myArgs)
        .pipe((protractor({

        })).on('error', function (e) {
                throw e;
            }).on('end', function() {
                // anything you want to run after the Sauce tests finish
            }));
});


var sauceConnectLauncher = require('sauce-connect-launcher');

// connects to saucelabs server and runs protractor e2e tests against saucelabs server
gulp.task('e2e_protractor_sauce', function() {
    sauceConnectLauncher({
        username: 'zakirhere',
        accessKey: '22adc0d1-780d-4564-b722-9e4cb5ebb5a8',
        // logger: console.log
    }, function (err, sauceConnectProcess) {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log("Sauce Connect ready");

        var myArgs = null;
        if(argv.suite == null || argv.suite == 'functional') {
            myArgs = './test-functional/*.spec.js';
        }
        else if(argv.suite == 'monitoring') {
            myArgs = './test-monitoring/*.spec.js';
        }

        gulp.src(myArgs)
            .pipe(protractor({
              //  configFile: "e2e/protractor.saucelabs.conf.js"
            }))
            .on('error', function(e) {
                sauceConnectProcess.close(function () {
                    console.log("Closed Sauce Connect process");
                });
                throw e;
            })
            .on('end', function(e) {
                sauceConnectProcess.close(function () {
                    console.log("Closed Sauce Connect process");
                });
            });

    });
});

