/*global define */
define([
    'marionette',
    'templates'
], function (Marionette, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.account.homePage,

        events: {
            'click #id-btn-login': 'login',
            'click #id-btn-create-account': 'createNewAccount'
        },

        login: function() {
            Backbone.history.navigate('login', {trigger: true});
        },

        createNewAccount: function() {
            Backbone.history.navigate('login/create', {trigger: true});
        }

    });
});