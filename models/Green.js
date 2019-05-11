const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let Green = new Schema({
    title: String,
    image: String,
    resumen: String,
    content: String,
    date: String,
    author: String
});

module.exports = mongoose.model('green', Green)