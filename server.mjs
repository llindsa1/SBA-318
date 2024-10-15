const express = import ('express');
const mongoose = import ('mongoose');
const bodyParser = import('body-parser');
const methodOverride = import ('method-override');
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended:true}));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

//MongoDB
mongoose.connect('mongodb://localhost:3000/lindalindsayblog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Routes
const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server runningon port ${PORT}`);
});

