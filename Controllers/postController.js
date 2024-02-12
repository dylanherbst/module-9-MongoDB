"use strict";
let Models = require("../Models"); // matches index.js

const getPost = (res) => {
// finds all users
Models.Post.find({})
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})


}
const createPost = (data, res) => {
// creates a new user using JSON data POSTed in request body
console.log(data)
new Models.Post(data).save()
.then(data => res.send({result: 200, data: data}))
.catch(err => {
console.log(err);
res.send({result: 500, error: err.message})
})
}

const updatePost = (req, res) => {
    // updates the user matching the ID from the param using
    // JSON data POSTed in request body
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true })
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    })
    }


    const deletePost = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
    console.log(err);
    res.send({result: 500, error: err.message})
    })
    }

    const getPostById = (req, res) => {
        const postId = req.params.id;
      
        Post.findById(postId)
          .populate('userId') // This will replace the userId with the full user document
          .then(post => {
            if (!post) {
              return res.status(404).send({ message: 'Post not found' });
            }
            res.send(post);
          })
          .catch(err => {
            console.error(err);
            res.status(500).send({ message: 'Error retrieving post' });
          });
      };



    module.exports = {
        getPost, createPost, deletePost, updatePost, getPostById
        }