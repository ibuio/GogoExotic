/* global Marionette */
define([
    'marionette',
    'auth0',
    'polyglot'
], function (Marionette, Auth0, Polyglot) {
    'use strict';

    // Our main application
    var app = new Marionette.Application();
    app.environment = 'dev';
    app.userProfile;
    app.lang = localStorage.getItem('gogolang') === null || localStorage.getItem('gogolang') === undefined 
        ? (window.navigator.userLanguage || window.navigator.language).substring(0, 2) : localStorage.getItem('gogolang');
    localStorage.setItem('gogolang', app.lang);

    var authOptions = auth0options;

    // AUTH AUTH AUTH
    var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
            container: 'main-region'
        }
    );

    /* onBeforeStart Event */
    app.on("before:start", function() {
        console.log('app::berfore:start');

        $.ajax({
            type: 'GET',
            url: 'json/apps/i18n/' + app.lang + '.json',
            dataType: 'json',
            success: function(data) {
                // Instantiates polyglot with phrases.
                window.polyglot = new Polyglot({ phrases: data });
            }
        });
    });

    app.on('start', function() {
        require([
            'router/AppRouter',
            'controllers/AppController',
            'controllers/DataController',
            'views/AppLayoutView',
            'views/LoadingView',
        ], function(AppRouter, AppController, DataController, AppLayoutView, LoadingView) {
            console.log('app::start');

            app.router = new AppRouter({ controller: new AppController() });

            app.dataController = new DataController();

            app.layoutView = new AppLayoutView();
            app.layoutView.render();

            var loadingView = new LoadingView();
            app.layoutView.showChildView('main_region', loadingView);

            // Backbone history for Routing
            if(Backbone.history)
                Backbone.history.start();
        });
    });

    app.authLogin = function(lock, options) {
        console.log('app::authLogin');

        lock.show(options, function(err, profile, token) {
            console.log('app::authLogin::lock.show');

            if(err) {
                // Error callback
                console.log("There was an error");
                alert("There was an error logging in");
            }
            else {
                // Success calback
                // Save the JWT token.
                if(token !== undefined && token !== 'null') {
                    sessionStorage.setItem('userToken', token);

                    // Save the profile
                    sessionStorage.setItem('usergogoprofile', JSON.stringify(profile));
                }

                window.location.reload();
            }
        });
    },

    // USER LOGOUT
    app.authLogout = function() {
        console.log('app::authLogout');
        sessionStorage.removeItem('userToken');
        app.userProfile = null;
        window.location.reload();
    }

    return window.app = app;
});
