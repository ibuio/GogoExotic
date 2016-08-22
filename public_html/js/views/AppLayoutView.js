define([
    'marionette',
    'radio',
    'views/account/UserTypeChoiceView',
    'templates'
], function (Marionette, Radio, UserTypeChoiceView, templates) {
    'use strict';
    return Marionette.LayoutView.extend({

        el: 'body',

        template: templates.appLayout,

        regions: {
            'main_region': '#main-region'
        },

        events: {
        },

        initialize: function() {
            this.accountChannel = Radio.channel('accountChannel');

            // Message received from the LoginView when creating a new account
            this.listenTo(this.accountChannel, 'create:account', function() {
                this.displayUserTypeView();
            });
        },

        displayUserTypeView: function() {
            console.log('displayUserTypeView');

            var userTypeChoice = new UserTypeChoiceView();
            this.showChildView('main_region', userTypeChoice);
        },

        displayCreateAccountView: function() {
            console.log('displayCreateAccountView');
        }

    });
});
