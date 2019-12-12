
const Post = require('../models/PostModel').Post;
module.exports ={
    index: (req, res)=>{

        res.render('admin/index');
    
    },

    getposts: (req, res)=>{

        res.render('admin/posts/index')
    },

    submitposts: (req,res) => {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        });

        newPost.save().then(posts => {
            console.log(posts);
            req.flash('success-message', 'Post created sucessfully.');
            res.redirect('/admin/posts');
        });
       
    },

    createposts: (req, res)=>{

        res.render('admin/posts/create')
    }



};