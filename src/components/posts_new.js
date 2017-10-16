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
          {...field.input} // field.input is an object that has some properties and event handlers, the ... pass those props to input instead of doing onChange={this.input.onChange}
        />
        {field.meta.error} {/* this property is automatically added to that field object from our validate function */}
      </div>
    )
  }

  //to show the errors on the screen we can reference the field object that is passed to the render field function
  render() {
    return(
      <form>
        <Field
          label="Title"
          name="title" // the name here must be identical from the validate function
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
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

function validate(values) { // whenever the user tries to submit the form this function will be called, the argument is values by convention, values contains all the values that the user has enter in the form
  // console.log(values) -> {title: "asdf", categories: "asdf", content: "asdf"}
  const errors = {};

  // validate the inputs from 'values'
  if(!values.title){
    errors.title = "Enter a title"; // if the user didn't enter a title, then we will add a property to the errors object of title and we're going to assigned to the msg it will be display to the user
  }
  if(!values.categories){
    errors.categories = "Enter some categories";
  }
  if(!values.content){
    errors.content = "Enter some content please";
  }

  // if errors is empty the form is valid to submit
  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({ // we pass a single argument that is a function tha takes some #s of configurations options for it
  validate, // pass the configuration option called validate, the same as validate: validate
  form: 'PostsNewForm' // form: the name of the form, if there are multiple forms in a single page redux-form will handle the different forms correctly. PostsNewForm needs to be unique to not share it state with any other forms
})(PostsNew);
