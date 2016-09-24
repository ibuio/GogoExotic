/*global define */
define([
    'marionette',
    'models/account/login',
    'templates'
], function (Marionette, Login, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.account.login,

        model: Login,

        events: {
            'click #id-btn-login': 'loginWithGogoCred',
            'click #id-btn-login-fb': function() { this.loginWithSocial('facebook'); },
            'click #id-btn-login-gmail': function() { this.loginWithSocial('google-oauth2'); },
            'click #id-btn-create-account': 'createNewAccount'
        },

        loginWithGogoCred: function() {
            var username = $('.user-email').val();
            var password = $('.user-password').val();
            $.when(app.dataController.loginWithGogoCred(username, password)).then(function(response) {
                //TODO: setté le Login Model avec ce que retourne Auth0
                //this.model.userType...
                if(response)
                    Backbone.history.navigate('profile/photo', {trigger: true});
            });
        },

        loginWithSocial: function(socialNetwork) {
            app.dataController.loginWithSocial(socialNetwork);
        }

    });
});