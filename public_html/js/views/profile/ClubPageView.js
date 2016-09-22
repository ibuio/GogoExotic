/*global define */
define([
    'marionette',
    'radio',
    'geocomplete',
    'templates'
], function (Marionette, Radio, geocomplete, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.profile.clubPage,

        events: {
            'click #btn-new-club-confirm': 'createNewClub'
        },

        onShow: function() {
            $("#club-address").geocomplete()
                .bind("geocode:result", function(event, result) {
                    console.log("Result: " + result.formatted_address);
                })
                .bind("geocode:error", function(event, status) {
                    console.log("ERROR: " + status);
                })
        },

        createNewClub: function() {
            
        }

    });
});