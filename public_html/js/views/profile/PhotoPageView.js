/*global define */
define([
    'marionette',
    'radio',
    'templates'
], function (Marionette, Radio, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.profile.photoPage,

        events: {
            'change .input-upload-pic': 'displayPictureNames'
        },

        displayPictureNames: function(e) {
            console.log('e ' + JSON.stringify(e));
        }

    });
});