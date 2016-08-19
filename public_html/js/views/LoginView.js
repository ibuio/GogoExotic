/*global define */
define([
    'marionette',
    'polyglot',
    'models/login',
    'templates'
], function (Marionette, Polyglot, Login, templates) {
    'use strict';
    return Marionette.ItemView.extend({

        template: templates.login,

        model: Login

    });
});