let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); // index.js
// Adds a GET route to return all users

router.get('/', (req, res) => {
Controllers.postController.getPost(res);
})

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.postController.createPost(req.body, res);
})


router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
    })


router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
    })

router.get('/posts/:id',(req, res) => {
 Controllers.postController.getPostById(req, res)
})

module.exports = router;