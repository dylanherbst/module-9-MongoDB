let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); // index.js
// Adds a GET route to return all users

router.get('/', (req, res) => {
Controllers.commentController.getComment(res);
})

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.commentController.createComment(req.body, res);
})


router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req, res)
    })


router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req, res)
    })


module.exports = router;