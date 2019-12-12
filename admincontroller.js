
const Post = require('../models/PostModel');
module.exports ={
    index: (req, res)=>{

        res.render('admin/index');
    
    },

    getposts: (req, res)=>{

        res.render('admin/posts/index')
    },

    submitposts: (req,res) => {
      

    const post =  new Post({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    });

    post.save().then(post=>{
        console.log("successfully post");
        req.flash('success-message', 'Post created sucessfully.');
        res.redirect('/admin/posts');
    }).catch(error=>console.log(error));

    console.log(Post);

     res.redirect("/admin/posts");
        /*const newPost = new post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        });

        newPost.save().then(posts => {
            console.log(posts);
            req.flash('success-message', 'Post created sucessfully.');
            res.redirect('/admin/posts');
        });*/
       
    },

    createposts: (req, res)=>{

        res.render('admin/posts/create')
    }



};