const Post = require('./Post');
const PostService = require('./PostService');

const postService = new PostService();

class PostController {
    async create(req, res) {
        try {
            // const {author,title,content,picture} = req.body;
            // const createdPost = await Post.create(post);

            const post = await postService.create(req.body);

            return res.json(createdPost);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(403).json(error);
        }
    }

    async getOne(req, res) {
        try {
            // const id = req.params.id;
            const { id } = req.params;

            if (!id) res.status(403).json({ error: 'No id provided' });

            // const post = await Post.findById(id);
            const post = await postService.getOne(id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;

            if (!post._id) res.status(403).json({ error: 'No id provided' });

            // const old= await Post.findById(post._id);
            // old.author = post.author ? post.author : old.author; //turner operator

            // const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true }); //entity state
            const updatedPost = await postService.update(post);
            return res.json(updatedPost);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) res.status(400).json({ error: 'No id provided' });

            // const post = await Post.findByIdAndDelete(id);
            const post = await postService.delete(id);
            return res.json(post);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = PostController;