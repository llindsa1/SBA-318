const express = import('express');
const router = express.Router();
const User = require('../Databases/User.mjs')

//Get all users
router.get('/', async (req,res) => {
    const users = await User.find();
    res.render('users/index', { users });
});

//Create new user form
router.get('/new', (req, res) => {
    res.render('users/new');
});

//Create new user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/users');
});

module.exports = router;
