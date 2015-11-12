/**
 * Created by v.bogoroditskiy on 11/10/2015.
 */

define([
    'backbone',
    'text!../templates/results-info.html',
    '../models/MainModel'

], function(Backbone, MyTemplates, MainModel){

    var ResultView = Backbone.View.extend({

        tagName: 'div',

        className: 'results',

        model: new MainModel,

        template: _.template(MyTemplates),

        initialize: function(){
            this.render();
            return this;
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            return this;
        }

    });

    return ResultView;
});