const express = import('express');
const router= express.Router();
const Post = import('../Databases/Post.mjs');
const User = import('../Databases/User.mjs');

//Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author');
    res.render('posts/index', { posts });
});

//Form to create new posts
router.get('/new', async (req, res) => {
    const users = (await User).find();
    res.render('posts/new', { users });
});

//Show individual post
router.get('/:id', async (req,res) => {
    const post= await Post.findById(req.params.id).populate('author').populate('comments');
    res.render('posts/show', { post });
});

//Edit posts form
router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('posts/edit', { post });
});

//Update posts
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
});

//Delete posts
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
});

export default router;
