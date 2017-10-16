import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
       return _.mapKeys(action.payload.data, 'id');//[post1, post2] but we want and object {1: {post1}, 2: {post2}}, we use the lodash library for that

    default:
      return state;
  }
}
