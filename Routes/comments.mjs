const express = import('express');
const router = express.Router();
const Comment = import('../Databases/Comment.mjs');
const Post = import('../Databases/Post.mjs')

//Add comments to posts
router.post('/:postId', async (req, res) => {
   try {
    const post = await Post.findById(req.params.postId);
    const comment = new Comment(req.body);
    comment.post = post._id
    await comment.save();

    post.comments.push(comment);
    await post.save();

    res.redirect(`/posts/${post._id}`);
   } catch (err) {
    console.log(err);
    res.redirect(`/posts/${req.params.id}`);
   }
});

export default router;

