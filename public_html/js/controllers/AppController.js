define([
    'marionette',
    'views/AppLayoutView'
], function (Marionette, AppLayoutView) {
    'use strict';
    return Marionette.Object.extend({

        login: function() {
            require([
                'views/LoginView',
                'views/LoadingView',
                'models/login'
            ], function(LoginView, LoadingView, Login) {
                console.log('AppController::login');

                var loginView = new LoginView({ model: new Login() });
                app.layoutView.showChildView('main_region', loginView);
            });
        }
    });
});
