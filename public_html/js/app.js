/* global Marionette */
define([
    'marionette',
    'auth0'
], function (Marionette, Auth0) {
    'use strict';

    // Our main application
    var app = new Marionette.Application();
    app.environment = 'dev';
    app.userProfile;

    var authOptions = auth0options;

    // AUTH AUTH AUTH
    var lock = new Auth0Lock(
        // All these properties are set in auth0-variables.json
        AUTH0_CLIENT_ID,
        AUTH0_DOMAIN
    );

    /* onBeforeStart Event */
    app.on("before:start", function() {
        require([
            'backbone'
        ], function(Backbone) {
            console.log('app::berfore:start');

            /*if(typeof sessionStorage.getItem('userToken') === 'undefined' || sessionStorage.getItem('userToken') === null) {
                app.authLogin(lock, authOptions);
            }
            else {
                $.ajaxSetup({
                    'beforeSend': function(xhr) {
                        if (sessionStorage.getItem('userToken')) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('userToken'));
                        }
                    },
                    dataType: "json",
                    contentType: "application/json",
                });

                // app.userProfile = JSON.parse(sessionStorage.getItem('usercmqprofile'));
                // app.environment = window.location.href.indexOf("phoenix.") !== -1 ? "ovhphoenix." : window.location.href.indexOf("dev") !== -1 ? "ovhdev." : window.location.href.indexOf("localhost") !== -1 ? "ovhdev." : "prod";
            }*/
        });
    });

    app.on('start', function() {
        require([
            'backbone',
        ], function(Backbone) {
            console.log('app::start');


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
            } else {
                // Success calback
                // Save the JWT token.
                if(token !== undefined && token !== 'null') {
                    sessionStorage.setItem('userToken', token);

                    // Save the profile
                    // sessionStorage.setItem('usercmqprofile', JSON.stringify(profile));
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

        window.Intercom("shutdown");
    }

    return window.app = app;
});
