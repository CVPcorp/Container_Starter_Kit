import React from 'react';

import './Post.css';

const post = (props) => {
  return (
    <div className="Post">
      <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
        <p>Posted: {new Date(props.post.created_on).toString()}</p>
      </div>
      <div>
        <button onClick={() => props.deletePost(props.post.id)}>Delete</button>
      </div>
    </div>
  );
}

export default post;