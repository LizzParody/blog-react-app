import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'; //formReducer is the alias of the reducer from redux-form
import PostReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
