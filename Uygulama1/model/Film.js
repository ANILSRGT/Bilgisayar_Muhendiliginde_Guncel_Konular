const mongoose = require('mongoose');

const Film = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    picture: {type: String},
});

module.exports = mongoose.model('Film', Film);