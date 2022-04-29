const Post = require('./Post');

class PostService {
    async create(post){
        const newPost = await Post.create(post);
        return newPost;
    }

    async getAll(){
        const posts = await Post.find({});
        return posts;
    }

    async getOne(id){
        const post = await Post.findById(id);
        return post;
    }

    async update(id, post){
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
        return updatedPost;
    }

    async delete(id){
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

module.exports = PostService;