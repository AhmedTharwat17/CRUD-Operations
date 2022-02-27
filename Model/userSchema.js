const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MyModel = mongoose.model('person', new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true
    }
},{versionKey: false , collection: 'userinfo'}));

module.exports = MyModel;