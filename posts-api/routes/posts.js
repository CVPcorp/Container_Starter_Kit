const express = require('express');

const controller = require('../controllers/posts');

const router = express.Router();

router.get('/', controller.getPosts);

router.post('/', controller.createPost);

router.delete('/:id', controller.deletePost);

module.exports = router;