import { connect } from 'react-redux';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import { actions } from '../../store/actions/posts';
import Post from './Post/Post';
import './Posts.css';

class Posts extends Component {
  componentDidMount = () => {
    if (!this.props.posts) {
      this.props.loadPosts();
    }    
  }

  deletePostHandler = (id) => {
    this.props.deletePost(id);
  }

  addPostHandler = () => {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');

    this.props.addPost({
      title: titleElement.value,
      content: contentElement.value,
    });

    titleElement.value = '';
    contentElement.value = '';    
  }  

  render() {
    const posts = !this.props.posts ? [] : this.props.posts.map(post => {
      return (
        <Post
          post={post}  
          key={post.id}
          deletePost={this.deletePostHandler}>
        </Post>
      );
    });

    return (
      <div className="Posts">
        <div className="NewPost">
          <FormControl type="text" placeholder="My Post Title" id="title" />
          <FormControl as="textarea" rows="3" placeholder="Post content goes here..." id="content" />
          <Button variant="primary" onClick={this.addPostHandler}>Add Post</Button>
        </div>
        <hr></hr>
        <div>{
          posts.length > 0
            ? posts
            : <h1>Please submit a post...</h1>
        }</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => dispatch(actions.loadPosts()),
    addPost: (post) => dispatch(actions.addPost(post)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);