import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; //to navigate to other components with the button
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });//map our list of post and generate one li for every post fetched, but is an object and object doesn't have map. We use lodash for that
  }

  render () {
    console.log(this.props.posts); // return two objects with the data
    return (
      <div>
        <div className="text-xs-right"> {/* it will pull the div in the right hand side of the screen */}
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
