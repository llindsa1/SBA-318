const express = import('express');
const router= express.Router();
const Post = import('../Databases/Post.mjs');
const User = import('../Databases/User.mjs');

//Show posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author');
    res.render('posts/index', { posts });
});

//Form to create new posts
router.get('/new', async (req, res) => {
    res.render('posts/new');
});


router.post('/', async (req,res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.redirect('/posts');
    } catch (err) {
        console.log(err);
        res.redirect('/posts/new');
    }
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
    try {
        await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.redirect(`/posts/${req.params.id}/edit`);
    }
});

//Delete posts
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
    } catch (err) {
        console.log(err);
        res.redirect('/posts');
    }
});

export default router;
