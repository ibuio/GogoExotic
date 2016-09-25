/*global define */
define([
    'marionette',
    'jqueryValidation',
    'templates'
], function (Marionette, JqueryValidation, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.profile.agencyPage,

        events: {
            'click #btn-create-agency-confirm': 'createAgency'
        },

        onShow: function() {
            $('.new-agency-form').validate({
                // Setting error messages for the fields
                messages: {
                    name: polyglot.t('account_warning_mandatory')
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

        createAgency: function(e) {
            e.preventDefault();
            e.stopPropagation();

            if($('.forgot-password-form').valid()) {
                var email = $('.page-top-info div input').val();

                $.when(app.dataController.resetPassword(email)).then(function() {
                    if(response)
                        Backbone.history.navigate('login', {trigger: true});
                });
            }
        }

    });
});