import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'

class PostIndex extends Component{
  componentDidMount(){ //the component will render one time before we fetch the data. This function will be automatically called by react inmediatly after this component has shown up inside the DOM
    this.props.fetchPosts();
  }
  render () {
    return (
      <div>
        Post Index
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostIndex); //null because we are not passing mapstatetoprops and a second argument instead of mapdispatchtoprops the action itself as an object
