const express = import ('express');
const app = express();
const bodyParser = import('body-parser');
const methodOverride = import ('method-override');
const mongoose = import ('mongoose');


//Middleware
app.use(bodyParser.urlencoded({ extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//MongoDB
mongoose.connect('mongodb://localhost:3000/lindalindsayblog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Routes
const PORT= process.env.PORT || 3000;

const usersRoute = import('./Routes/users.mjs');
const postsRoute = import('./Routes/posts.mjs');
const commentsRoute = import('./Routes/comments.mjs');

app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('/comments', commentsRoute);

app.listen(PORT, () => {
    console.log(`Server runningon port ${PORT}`);
});
