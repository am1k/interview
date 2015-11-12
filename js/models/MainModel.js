/**
 * Created by v.bogoroditskiy on 11/10/2015.
 */

define(['../lib/backbone'], function(Backbone){

    var MainModel = Backbone.Model.extend({

        defaults: {
            name: '',
            surname: '',
            age: 0,
            born: '',
            live: '',
            work: '',
            study: '',
            hobby: '',
            movie: '',
            cartoon: '',
            telephone: 0,
            email: ''
        },

        validation: {
            name: {
                required: true,
                msg: 'Incorrect name'
            },
            surname: {
                required: true,
                msg: 'Incorrect surname'
            },
            email: {
                required: true,
                pattern: 'email',
                msg: 'Incorrect email'
            },
            telephone: {
                required: true,
                pattern: 'digits',
                msg: 'Incorrect telephone'
            },
            age: {
                required: true,
                msg: 'Incorrect age'
            },
            born: {
                required: true,
                msg: 'Incorrect born'
            },
            live: {
                required: true,
                msg: 'Incorrect live'
            },
            work: {
                required: true,
                msg: 'Incorrect work'
            },
            study: {
                required: true,
                msg: 'Incorrect study'
            },
            hobby: {
                required: true,
                msg: 'Incorrect hobby'
            },
            movie: {
                required: true,
                msg: 'Incorrect movie'
            },
            cartoon: {
                required: true,
                msg: 'Incorrect cartoon'
            }
        }

    });

    return MainModel;

});