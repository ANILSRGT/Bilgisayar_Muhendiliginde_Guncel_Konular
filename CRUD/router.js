const {Router} = require('express');
const router = Router();
const PostController = require('./PostController');

// router.post('/posts', async (req,res) => {
//     try {
//         //Destruting
//         const {author,title,content,picture} = req.body;

//         const post = await Post.create({ author,title,content,picture });
//         res.json(post);
//     } catch (error) {
//         console.log(error);
//     }
// });

const postController = new PostController();

router.post('/posts', postController.create);

module.exports = router;