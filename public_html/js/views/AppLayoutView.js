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
        }

    });
});
