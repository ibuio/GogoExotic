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
            'click #btn-new-user-confirm': 'createNewUser'
        },

        createNewUser: function() {
            var phoneNumber = $('#tel-first').val() + $('#tel-middle').val() + $('#tel-last').val();
            var userData = {
                email: $('.user-email').val(),
                password: $('.user-password').val(),
                phoneNumber: phoneNumber,
                nickname: $('.user-nickname').val(),
                userType: $('input[name="user-type"]:checked').val(),
                sexe: $('select.select-user-sexe option:selected').val(),
                language: $('select.select-user-language option:selected').val()
            };

            console.log('userData ' + JSON.stringify(userData));

            // app.dataController.createNewUser(userData);
        }

    });
});