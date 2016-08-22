/*global define */
define([
    'marionette',
    'radio',
    'models/account/login',
    'templates'
], function (Marionette, Radio, Login, templates) {
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
            app.dataController.loginWithGogoCred(username, password);
        },

        loginWithSocial: function(socialNetwork) {
            app.dataController.loginWithSocial(socialNetwork);
        },

        createNewAccount: function() {
            Radio.trigger('accountChannel', 'create:account');
        }

    });
});