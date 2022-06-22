const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    account: String,
    password: String,
    username:String
});

module.exports = mongoose.model('User' , PostSchema);