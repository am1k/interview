define([
    'backbone',
    'jquery',
    './views/PersonalView',
    './views/QuestionFirstView',
    './views/QuestionSecondView',
    './views/ResultsView'

], function(Backbone, $, PersonView, FirstView, SecondView, ResultsView ){

    var MyRouter = Backbone.Router.extend({
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
            this.currentView = new PersonView;
            $('#application').append(this.currentView.$el);
        },

        firstQuestions: function(){
            this.removeView();
            this.currentView = new FirstView;
            $('#application').append(this.currentView.$el);
        },

        secondQuestions: function(){
            this.removeView();
            this.currentView = new SecondView;
            $('#application').append(this.currentView.$el);
        },

        all: function(){
            this.removeView();
            this.currentView = new ResultsView;
            $('#result').append(this.currentView.$el);
        },
        removeView: function(){
            console.log(this.currentView);
            this.currentView && this.currentView.close();
        }

    });

    return MyRouter;


});