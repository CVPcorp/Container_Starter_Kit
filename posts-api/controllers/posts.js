const repo = require('../repositories/posts');

const getPosts = (req, res, next) => {
  return repo.getPosts(req, res, next);
}

const createPost = (req, res, next) => {
  return repo.createPost(req, res, next);
}

const deletePost = (req, res, next) => {
  return repo.deletePost(req, res, next);
}

module.exports = {
  getPosts,
  createPost,
  deletePost
}