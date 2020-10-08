import { actionTypes } from '../actions/posts';

const initialState = {
  posts: null
}

const reducer = (state = initialState, action) => {
  let posts;

  if (state.posts) {
    posts = [...state.posts];
  }

  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      posts = action.posts;
      break;
    case actionTypes.ADD_POST:
      posts.push(action.post);
      break;
    case actionTypes.DELETE_POST:
      const index = posts.findIndex(post => {
        return post.id === action.id;
      });
      posts.splice(index, 1);
      break;
    default:
      break;
  }

  return {
    posts: posts
  };
}

export default reducer;