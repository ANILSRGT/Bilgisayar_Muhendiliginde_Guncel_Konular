const express = require('express');
const mongoose = require('mongoose');
const Post = require('./Post');
const router = require('./router');

app = express();

app.use(express.json());

PORT = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     console.log(req.query.test);
//     res.status(200).json("runnnig");
// });

// app.post('/', async (req,res) => {
//     try {
//         const {author,title,content,picture} = req.body;

//         const post = await Post.create({ author,title,content,picture });
//         res.json(post);
//     } catch (error) {
//         console.log(error);
//     }
// });

app.use('/api', router);

const DB_URL = "{YOUR_URL}";

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startApp();