/*global define */
define([
    'marionette',
    'jqueryValidation',
    'templates'
], function (Marionette, JqueryValidation, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.account.createAccount,

        events: {
            'click #btn-new-user-confirm': 'createNewUser'
        },

        onRender: function() {
            $('.create-account-form').validate({
                // Passing the object with custom rules
                rules : { 
                },
                // Setting error messages for the fields
                messages: {
                    email: polyglot.t('account_warning_mandatory'),
                    nickname: polyglot.t('account_warning_mandatory'),
                    password: polyglot.t('account_warning_mandatory'),
                    'tel-three': {
                        required: polyglot.t('account_warning_phone'),
                        number: polyglot.t('account_warning_phoneformat'),
                        minlength: polyglot.t('account_warning_phoneformat'),
                        maxlength: polyglot.t('account_warning_phoneformat')
                    }
                },
                highlight: function (element) {
                    $(element).addClass('error').removeClass('valid')
                        .closest('.form-group').addClass('error').removeClass('valid');
                },
                unhighlight: function (element) {
                    $(element).addClass('valid').removeClass('error')
                        .closest('.form-group').addClass('valid').removeClass('error');
                },
                ignore: ".ignore"
            });
        },

        createNewUser: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if($('.create-account-form').valid()) {
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

                $.when(app.dataController.createNewUser(userData)).then(function(response) {
                    // Redirecting to the upload pictures page only if the new user is a stripper
                    if(response && userData.userType === 'Stripper')
                        Backbone.history.navigate('profile/photo', {trigger: true});
                    else if(response && userData.userType === 'Manager')
                        Backbone.history.navigate('profile/club', {trigger: true});
                });
            }
        }

    });
});