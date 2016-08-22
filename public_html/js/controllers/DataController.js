define([
    'marionette'
], function (Marionette) {
    'use strict';
    return Marionette.Object.extend({

        // Login to Auth0 with the username-password of the Auth0 user (isSocial == false)
        loginWithGogoCred: function(username, password) {
            var deferred = $.Deferred();

            var self = this;
            var request = $.ajax({
                url: 'https://ibuio.auth0.com/oauth/ro',
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {
                    client_id: AUTH0_CLIENT_ID,
                    username: username,
                    password:  password,
                    connection: 'Username-Password-Authentication',
                    grant_type: 'password',
                    scope: 'open name email'
                }
            });

            $.when(request).done(function(data, textStatus, xhr) {
                // deferred.resolve(true);
                console.log('reponse de Auth0 au login ' + JSON.stringify(data));
            });
            request.fail(function(jqXHR, textStatus) {
                // deferred.resolve(false);
            });

            return deferred.promise();
        },

        loginWithSocial: function(socialNetwork) {
            var deferred = $.Deferred();

            var self = this;
            var request = $.ajax({
                url: 'https://ibuio.auth0.com/authorize',
                type: 'GET',
                // contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                /*headers: {
                    "Authorization": "Basic " + + btoa( + ':' + )
                },*/
                data: {
                    response_type: 'token',
                    client_id: AUTH0_CLIENT_ID,
                    connection: socialNetwork
                }
            });

            $.when(request).done(function(data, textStatus, xhr) {
                console.log('reponse success de Auth0 au login avec gmail ' + JSON.stringify(data));
                // deferred.resolve(true);
            });
            request.fail(function(jqXHR, textStatus) {
                console.log('reponse fail de Auth0 au login avec gmail ' + JSON.stringify(jqXHR));
                // deferred.resolve(false);
            });

            return deferred.promise();
        }

    });
});