/**
 * Created by v.bogoroditskiy on 11/10/2015.
 */

define([
    'backbone',
    'jquery',
    'text!../templates/person-info.html',
    '../models/MainModel',
    '../lib/backbone-validation-amd-min',
    '../lib/backbone.stickit.form'
], function(Backbone, $, myTemplate, MainModel, Validation, BackboneStickitForm){

    Backbone.View.prototype.close = function(){
        this.unstickit(this.model, this.bindings);
        this.remove();
    };

    var PersonalView = Backbone.View.extend({

        tagName: 'div',

        className: 'personal-information',

        model: new MainModel,

        bindings: BackboneStickitForm.getBindings(['name', 'surname']),

        events: {
            'click #next' : 'setValidate'
        },

        template: _.template(myTemplate),

        initialize: function(){
            this.render();
            return this;
        },

        render: function(){
            console.log(this.model);
            this.$el.html(this.template());
            Backbone.Validation.bind(this, {
                valid: function (view, attr) {
                    var $el = view.$('[name=' + attr + ']'),
                        $group = $el.closest('.form-group');
                    $group.removeClass('error');
                    $group.find('.validation-text').html('').addClass('hide');
                },
                invalid: function (view, attr, error) {
                    var $el = view.$('[name=' + attr + ']'),
                        $group = $el.closest('.form-group');

                    $group.addClass('error');
                    $group.find('.validation-text').html(error).removeClass('hide');
                }
            });
            this.stickit(this.model, this.bindings);
            return this;
        },

        setValidate: function(e){
            if(this.model.isValid(['name', 'surname'])){
              this.addValues();
            } else {
                e.preventDefault();
            }
        },

        addValues: function(){
            var self = this;
            $('.questions').each(function(option, val){
                self.model.get('questions').push($(val).text());
            });
            $('.answers').each(function(option,val){
                self.model.get('answers').push($(val).val());
            });
        }
    });

    return PersonalView;


});
