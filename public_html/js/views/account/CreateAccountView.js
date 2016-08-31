/*global define */
define([
    'marionette',
    'radio',
    'templates'
], function (Marionette, Radio, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.account.createAccount,

        events: {
            'click #id-btn-striper': function() { this.createNewUser('striper'); },
            'click #id-btn-manager': function() { this.createNewUser('manager'); }
        },

        createNewUser: function() {
            Radio.trigger('accountChannel', 'choose:user');
        }

    });
});