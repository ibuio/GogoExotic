/*global define */
define(function (require) {
    'use strict';

    return {
        appLayout: require('tpl!templates/appLayout.tmpl'),
        loading: require('tpl!templates/loading.tmpl'),

        account: {
            homePage: require('tpl!templates/account/homePage.tmpl'),
            login: require('tpl!templates/account/login.tmpl'),
            userTypeChoice: require('tpl!templates/account/userTypeChoice.tmpl')
        }
    };
});
