class PostService {
    async create(post) {
        const newPost = await Post.create(post);
        return newPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) throw new Error('No id provided');
        
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
        return updatedPost;
    }

    async delete(id) {
        const post = await Post.findByIdDelete(id);
        return post;
    }
}

module.exports = PostService;