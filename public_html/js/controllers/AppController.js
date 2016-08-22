define([
    'marionette',
    'views/AppLayoutView'
], function (Marionette, AppLayoutView) {
    'use strict';
    return Marionette.Object.extend({

        login: function() {
            require([
                'views/account/LoginView',
                'models/account/login'
            ], function(LoginView, Login) {
                console.log('AppController::login');

                var loginView = new LoginView({ model: new Login() });
                app.layoutView.showChildView('main_region', loginView);
            });
        }
    });
});
