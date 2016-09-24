/*global define */
define([
    'marionette',
], function (Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'home',
        
            'login': 'login',
            
            'login/forgot': 'forgotPassword',

            'login/create': 'createAccount',

            'profile/photo': 'profilePhoto',

            'profile/club': 'profileClub'
        }

    });
});
