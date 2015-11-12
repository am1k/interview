define([
    'backbone',
    'jquery',
    './views/PersonalView',
    './views/QuestionFirstView',
    './views/QuestionSecondView',
    './views/ResultsView',
    './models/MainModel'

], function(Backbone, $, PersonView, FirstView, SecondView, ResultsView, MainModel ){

    var appModel = new MainModel,
        MyRouter = Backbone.Router.extend({
        currentView: null,
        routes: {
            '': 'home',
            'question_first': 'firstQuestions',
            'question_second': 'secondQuestions',
            'question_all': 'all'
        },

        initialize: function(){
            Backbone.history.start();
        },

        home: function(){
            this.removeView();
            this.currentView = new PersonView({model: appModel});
            $('#application').append(this.currentView.$el);
        },

        firstQuestions: function(){
            this.removeView();
            this.currentView = new FirstView({model: appModel});
            $('#application').append(this.currentView.$el);
        },

        secondQuestions: function(){
            this.removeView();
            this.currentView = new SecondView({model: appModel});
            $('#application').append(this.currentView.$el);
        },

        all: function(){
            this.removeView();
            this.currentView = new ResultsView({model: appModel});
            $('#result').append(this.currentView.$el);
        },
        removeView: function(){
            this.currentView && this.currentView.close();
        }

    });

    return MyRouter;


});