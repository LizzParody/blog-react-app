import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) { // the state object, the key is the individual post and the value are the actual post themselves, ideally we are going to get the post that gets returned from the API and inserted into our state object, we can't put the values from the actions creator because it doesn't have an ID asociated with it
  switch (action.type) {
    case FETCH_POSTS:
       return _.mapKeys(action.payload.data, 'id');//[post1, post2] but we want and object {1: {post1}, 2: {post2}}, we use the lodash library for that

    default:
      return state;
  }
}
