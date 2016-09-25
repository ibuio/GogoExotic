/*global define */
define([
    'marionette',
], function (Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'home',
        
            'login': 'login',
            
            'login/create': 'createAccount',

            'login/forgot': 'forgotPassword',

            'profile/agency': 'profileAgency',

            'profile/club': 'profileClub',

            'profile/photo': 'profilePhoto'
        }

    });
});
