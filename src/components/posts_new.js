import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';//import two helpers from redux-form, Field is wired up automatically to Redux-form, reduxForm is a function similar to the connect function

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return(
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Tags"
          name="tags"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({ //we pass a single argument that is a function tha takes some #s of configurations options for it
  form: 'PostsNewForm' //form: the name of the form, if there are multiple forms in a single page redux-form will handle the different forms correctly. PostsNewForm needs to be unique to not share it state with any other forms
})(PostsNew);
