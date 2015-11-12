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

        template: _.template(MyTemplates),

        initialize: function(){
            this.render();
            return this;
        },

        render: function(){
            var data = this.model.toJSON();
            console.log(Object.keys(this.model.toJSON()).map(function(key){
                return
            }) )
            this.$el.html(this.template( ));
            return this;
        }

    });

    return ResultView;
});