import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=liz23';

export function fetchPosts() { // to fetch a list of post from the api
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request //we asing the request from axios to the payload, because the request is assigned to payload, the redux promise middleware will automatically resolve the request for us
  };
}
