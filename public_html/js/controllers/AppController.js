define([
    'marionette',
    'views/AppLayoutView'
], function (Marionette, AppLayoutView) {
    'use strict';
    return Marionette.Object.extend({

        home: function() {
            require([
                'views/account/HomePageView',
            ], function(HomePageView) {
                console.log('AppController::home');

                var homePageView = new HomePageView();
                app.layoutView.showChildView('main_region', homePageView);
            });
        },

        login: function() {
            require([
                'views/account/LoginView',
                'models/account/login'
            ], function(LoginView, Login) {
                console.log('AppController::login');

                var loginView = new LoginView({ model: new Login() });
                app.layoutView.showChildView('main_region', loginView);
            });
        },

        createAccount: function() {
            require([
                'views/account/CreateAccountView'
            ], function(CreateAccountView) {
                console.log('AppController::createAccount');

                var createAccountView = new CreateAccountView();
                app.layoutView.showChildView('main_region', createAccountView);
            });
        }
    });
});
