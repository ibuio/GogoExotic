requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        underscore: 'vendor/underscore/underscore-min',
        backbone: 'vendor/backbone/backbone-min',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette.min',
        radio: 'vendor/backbone.radio/build/backbone.radio.min',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap.min',
        bootstrapmaterialize: 'vendor/bootstrap-materialize/js/material.min',
        spin: 'vendor/spin/javascripts/jquery.spin',
        moment: 'vendor/moment/min/moment.min',
        auth0: 'vendor/auth0-lock/build/lock.min',
        jqueryui: 'vendor/jquery-ui/jquery-ui.min',
        jqueryValidation: 'vendor/jquery-validation/dist/jquery.validate.min',
        alertify: 'vendor/alertify/alertify.min',
        polyglot: 'vendor/polyglot/polyglot.min',
        tpl: 'lib/tpl'
    },

shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        radio: {
            exports: 'Backbone.Radio',
            deps: ['backbone']
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['jquery', 'underscore', 'bootstrap']
});

require(['app'], function(GogoExotic) {

    // Global ajax settings
    $.ajaxSetup({
        contentType: 'application/json',
        dataType: 'json',
    });

    GogoExotic.start();
});