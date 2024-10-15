const express = import('express');
const router = express.Router();
const User = import('../Databases/User.mjs')

//Registration
router.get('/register', (req,res) => {
    res.render('users/register');
});
router.post('/register', async (req,res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/users/login');
    } catch (err) {
        console.log(err);
        res.redirect('/users/register');
    }
});

//Login
router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {
    const user = await User.findOne ({username: req.body.username});
  if (user && user.password === req.body.password) {
    res.redirect('/posts');
  } else {
    res.redirect('/users/login');
  }
});

export default router;
