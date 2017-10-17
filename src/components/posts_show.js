import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params // provided by react router, match is the top level property, params is an object that list all the different wildcards tokens that exist inside the URL, get the id out the url
    this.props.fetchPost(id); // as soon as the component appears on the screen we're going to fetch that post
  }

  onDeleteClick() {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    }); //action creator name deletePost, callback function, when we delete a post go back to the list of post
  }

  render() {
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }

    return(
      <div>
        <Link to="/" className="btn btn-primary">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) { // ownProps by convention, it's the props object that is going to the PostsShow component
  return { post: posts[ownProps.match.params.id]} // instead of returning the list of post, we just return one single post that we care about
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostsShow);
