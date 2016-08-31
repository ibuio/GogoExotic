define([
    'marionette',
    'radio',
    'templates'
], function (Marionette, Radio, templates) {
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
        }

    });
});
