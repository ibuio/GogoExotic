/*global define */
define(function (require) {
    'use strict';

    return {
        appLayout: require('tpl!templates/appLayout.tmpl'),
        login: require('tpl!templates/login.tmpl'),
        loading: require('tpl!templates/loading.tmpl')
    };
});
