import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=liz23';

export function fetchPosts() { // to fetch a list of post from the api
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request // we asing the request from axios to the payload, because the request is assigned to payload, the redux promise middleware will automatically resolve the request for us
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values) // we want to make sure the request is made with the values from the form so we put values as second argument, the data we want to send to the remote API
    .then(() => callback()); // make the API request after has been successfully completed with then and then execute the callback function

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) { //this action creator is going to be called with the id of the post we want to fetch
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}
