import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) { // the action is payload that contains the idea of post we just deleted, we need to reach our state object and get rid off the key and the value that match the particular id
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // look at the state object, if it has the key of post id, just drop it, omit it from that objet and return a new object that does not contain that id anymore
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state } //we already have some #s of post possibly that have been fetched  and stored inside the reducer (don't want to throw away the data that I fetch over time, we want to add to the existing app state level) ...state take all the existing post
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data } //we are not crating an array, we are doing key interpolation, whatever the variable action.payload.data.id is, make a new key and make it equal to action.payload.data
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');//[post1, post2] but we want and object {1: {post1}, 2: {post2}}, we use the lodash library for that

    default:
      return state;
  }
}
