define([
    'marionette',
    'templates'
], function (Marionette, templates) {
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

        }

    });
});
