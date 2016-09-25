/*global define */
define(function (require) {
    'use strict';

    return {
        appLayout: require('tpl!templates/appLayout.tmpl'),
        loading: require('tpl!templates/loading.tmpl'),

        account: {
            homePage: require('tpl!templates/account/homePage.tmpl'),
            login: require('tpl!templates/account/login.tmpl'),
            createAccount: require('tpl!templates/account/createAccount.tmpl'),
            forgotPassword: require('tpl!templates/account/forgotPassword.tmpl')
        },

        profile: {
            agencyPage: require('tpl!templates/profile/agencyPage.tmpl'),
            clubPage: require('tpl!templates/profile/clubPage.tmpl'),
            photoPage: require('tpl!templates/profile/photoPage.tmpl')
        }
    };
});
