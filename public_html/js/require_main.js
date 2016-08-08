requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: 'vendor/jquery/dist/jquery.min',
        underscore: 'vendor/underscore/underscore',
        backbone: 'vendor/backbone/backbone',
        marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
        radio: 'vendor/backbone.radio/build/backbone.radio.min',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap.min',
        spin: 'vendor/spin/javascripts/jquery.spin',
        moment: 'vendor/moment/min/moment.min',
        auth0: 'vendor/auth0-lock/build/lock.min',
        jqueryui: 'vendor/jquery-ui/jquery-ui.min',
        alertify: 'vendor/alertify/alertify.min',
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