
(function () {
    "use strict";

    var EXPECTED_NODE_VERSION = "v9.1.0";

    desc("Default Build");
    task("default", ["version"], function () {
        console.log("\n\nBUILD OK");
    });

    desc("Checking Node version");
    task("version", function() {
        console.log("Checking Node version: .");

        var actualNodeVersion = process.version;
        if (actualNodeVersion !== EXPECTED_NODE_VERSION) {
            fail("Incorrect Node version: Expected " + EXPECTED_NODE_VERSION + ", but was " + actualNodeVersion);
        }

    });
}());