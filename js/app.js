requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        jquery: 'jquery-2.1.4.min',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text',
        stickit: 'backbone.stickit',
        validate: 'backbone-validation-amd-min',
        stickitform: 'backbone.stickit.form'
    }
});

require([
        '../main',
        'stickit'
    ],
    function(App) {
        new App();
    }
);
