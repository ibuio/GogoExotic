/*global define */
define([
    'marionette',
    'jqueryValidation',
    'templates'
], function (Marionette, JqueryValidation, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.account.forgotPassword,

        onShow: function() {
            $('.forgot-password-form').validate({
                 // Setting error messages for the fields
                messages: {
                    email: polyglot.t('account_warning_mandatory')
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
        }

    });
});