"use strict";
let Models = require("../Models"); // Ensure this path correctly matches your file structure

// Correctly retrieves all comments

const getComment = (req, res) => {
  Models.Comment.find({})
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Creates a new comment
const createComment = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data)
  new Models.Comment(data).save()
  .then(data => res.send({result: 200, data: data}))
  .catch(err => {
  console.log(err);
  res.send({result: 500, error: err.message})
  })
  }
  

// Updates an existing comment
const updateComment = (req, res) => {
  console.log(req.body);
  Models.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Deletes an existing comment
const deleteComment = (req, res) => {
  Models.Comment.findByIdAndDelete(req.params.id)
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// Exporting the functions
module.exports = {
  getComment,
  createComment,
  deleteComment,
  updateComment,
};
