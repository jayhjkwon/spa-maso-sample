var jam = {
    "packages": [
        {
            "name": "activity",
            "location": "jam/activity.indicator",
            "main": "activity-indicator.js"
        },
        {
            "name": "amplify",
            "location": "jam/amplify",
            "main": "amplify.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "i18n",
            "location": "jam/i18n",
            "main": "i18n.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "jquery.js"
        },
        {
            "name": "jquery-ui",
            "location": "jam/jquery-ui",
            "main": "dist/jquery-ui.min.js"
        },
        {
            "name": "jquery-validation",
            "location": "jam/jquery-validation",
            "main": "jquery.validate.js"
        },
        {
            "name": "knockout",
            "location": "jam/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "jam/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "less",
            "location": "jam/less",
            "main": "./lib/less/index"
        },
        {
            "name": "mockJson",
            "location": "jam/mockJson",
            "main": "jquery.mockjson.js"
        },
        {
            "name": "modernizr",
            "location": "jam/modernizr"
        },
        {
            "name": "sammy",
            "location": "jam/sammy",
            "main": "sammy.js"
        },
        {
            "name": "text",
            "location": "jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.11",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}