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
                console.log('reponse de Auth0 au login ' + JSON.stringify(data));
                deferred.resolve(true);
            });
            request.fail(function(jqXHR, textStatus) {
                deferred.resolve(false);
            });

            return deferred.promise();
        },

        loginWithSocial: function(socialNetwork) {
            var deferred = $.Deferred();

            var self = this;
            var request = $.ajax({
                url: 'https://ibuio.auth0.com/authorize',
                type: 'GET',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
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
                console.log('reponse success de Auth0 au login avec ' + socialNetwork + ' ' + JSON.stringify(data));
                // deferred.resolve(true);
            });
            request.fail(function(jqXHR, textStatus) {
                console.log('reponse fail de Auth0 au login avec ' + socialNetwork + ' ' + JSON.stringify(jqXHR));
                // deferred.resolve(false);
            });

            return deferred.promise();
        },

        // Sign-up to Auth0 with username-password
        createNewUser: function(userData) {
            var deferred = $.Deferred();

            var self = this;
            var request = $.ajax({
                url: 'https://ibuio.auth0.com/dbconnections/signup',
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {
                    client_id: AUTH0_CLIENT_ID,
                    email: userData.email,
                    password:  userData.password,
                    phone_number: userData.phoneNumber,
                    connection: 'Username-Password-Authentication',
                    user_metadata: {
                        nickname: userData.nickname,
                        userType: userData.userType,
                        sexe: userData.sexe,
                        language: userData.language
                    }
                }
            });

            $.when(request).done(function(data, textStatus, xhr) {
                console.log('reponse de Auth0 au login ' + JSON.stringify(data));
                deferred.resolve(true);
            });
            request.fail(function(jqXHR, textStatus) {
                deferred.resolve(false);
            });

            return deferred.promise();
        },

        // When the user enters his email after clicking on the Forgot your password link
        resetPassword: function(email) {
            var deferred = $.Deferred();

            var self = this;
            var request = $.ajax({
                url: 'https://ibuio.auth0.com/dbconnections/change_password',
                type: 'POST',
                // contentType: 'application/json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: {
                    client_id: AUTH0_CLIENT_ID,
                    email: email,
                    connection: 'Username-Password-Authentication'
                }
            });

            $.when(request).done(function(data, textStatus, xhr) {
                console.log('reponse de Auth0 au reset du password ' + JSON.stringify(data));
                deferred.resolve(true);
            });
            request.fail(function(jqXHR, textStatus) {
                deferred.resolve(false);
            });

            return deferred.promise();
        }

    });
});