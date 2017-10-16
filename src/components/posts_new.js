import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';//import two helpers from redux-form, Field is wired up automatically to Redux-form, reduxForm is a function similar to the connect function responsible for handling the state and validation of our form
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field){
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // field.input is an object that has some properties and event handlers, the ... pass those props to input instead of doing onChange={this.input.onChange}
        />
        <div className="text-help">
          {touched ? error : ''} {/* field.meta.error show error, is automatically added to that field object from our validate function */}
        </div>
      </div>
    )
  }

  onSubmit(values){
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props; //this is a property that's being passed to the component on behalf of redux form (we wired reduxForm with the PostNew component to add some additional properties to our component)

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> {/* redux form is no responsible for saving the data or making a post request. handleSubmit is going to run the redux-form (validation, state), if the form is valid, we will call the callback and passes us the values out of the form */}
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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

// we wired reduxForm with the PostNew component to add some additional properties to our component
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
