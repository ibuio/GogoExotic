define([
    'marionette'
], function (Marionette) {
    'use strict';
    return Marionette.Object.extend({

        initialize: function() {
        },

        login: function() {
            require([
                'views/LoginView'
            ], function(LoginView) {
                console.log('AppController::login');

                var loginView = new LoginView();
                // app.layoutView.showChildView('main_region', loginView);

            });
        }

    });
});
