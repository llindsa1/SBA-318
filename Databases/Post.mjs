const mongoose = import('mongoose');
const postSchema = new mongoose.Schema({
    title: String, 
    content: String,
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});
export default mongoose.model('Post', postSchema);
