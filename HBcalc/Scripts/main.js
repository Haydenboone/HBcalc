requirejs.config({
    paths: {
        'knockout': './knockout-3.5.1',
        'bootstrap': './bootstrap',
        'jquery': './jquery-3.7.1.min',
        'jquery-ui': './jquery-ui-1.14.1.min',
        'font-awesome': '../Content/font-awesome.min',
    },
    shim: {
        'jquery-ui': ['jquery'],
        'addressParser': ['jquery'],
        'bootstrap': {
            deps: ['jquery', 'jquery-ui'],
            exports: 'jQuery'
        }
    },
    urlArgs: window.urlArgs
});

define(['knockout', 'jquery', 'bootstrap'],
    function (ko, $) {
        var tvar = ko.observerable();
    });

//requirejs(["helper/util"], function (util) {
//    //This function is called when scripts/helper/util.js is loaded.
//    //If util.js calls define(), then this function is not fired until
//    //util's dependencies have loaded, and the util argument will hold
//    //the module value for "helper/util".

//});