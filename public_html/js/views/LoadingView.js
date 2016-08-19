/*global define */
define([
    'marionette',
    'spin',
    'templates'
], function (Marionette, Spin, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.loading,

        onShow: function() {
            $('.spin').spin();
        }
    });
});