import axios from 'axios';

import config from '../../config';

export const actionTypes =  {
  LOAD_POSTS: "LOAD_POSTS",
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST",
}

const _loadPosts = (posts) => {
  return {
    type: actionTypes.LOAD_POSTS,
    posts: posts
  }
}

const loadPosts = () => {
  return dispatch => {
    axios.get(config.services.posts.uri)
      .then( res => {
        dispatch(_loadPosts(res.data))
      })
  }
}

const _addPost = (post) => {
  return {
    type: actionTypes.ADD_POST,
    post: post
  }
}

const addPost = (post) => {
  return dispatch => {
    axios.post(config.services.posts.uri, post)
      .then(res => {
        dispatch(_addPost(res.data))
      })
  }
}

const _deletePost = (id) => {
  return {
    type: actionTypes.DELETE_POST,
    id: id
  }
}

const deletePost = (id) => {
  return dispatch => {
    axios.delete(`${config.services.posts.uri}/${id}`)
      .then(res => {
        dispatch(_deletePost(id))
      })
  }
}

export const actions =  {
  loadPosts,
  addPost,
  deletePost,
}