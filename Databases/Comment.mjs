const mongoose = import('mongoose');
const commentSchema = new mongoose.Schema({
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Post'
    }
});