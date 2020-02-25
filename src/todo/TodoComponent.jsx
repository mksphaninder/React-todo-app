import React, { Component } from "react";
import moment from "moment";
import { Formik, Field, Form, ErrorMessage } from "formik";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "learn forms",
      date: moment(new Date()).format("MM/DD/YYYY")
    };
    //binding
    this.onSubmit = this.onSubmit.bind(this);
    this.validation = this.validation.bind(this);
  }
  render() {
    let description = this.state.description;
    let date = this.state.date;
    return (
      <>
        <div className="container">
          <div className="title">
            Editing the todo with id {this.props.match.params.id}
          </div>

          <Formik
            initialValues={{
              description,
              date
            }}
            onSubmit={this.onSubmit}
            validate={this.validation}
          >
            {props => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                  <ErrorMessage name="description" component="div" className="alert alert-danger" />
                </fieldset>

                <fieldset className="form-group">
                  <label>target</label>
                  <Field className="form-control" type="date" name="date" />
                  <ErrorMessage name="date" component="div" className="alert alert-danger" />
                </fieldset>

                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  }
  onSubmit(values) {
      
  }

  validation(values) {
    let errors = {

    };

    if(!values.description) {
        errors.description = "Please Enter Description"
    }
    else if(values.description.length < 5) {
        errors.description = "Please Enter Description of length atleast 5 characters"
    }
    else if(!moment(values.date).isValid()) {
        errors.date = "Please enter a valid Date."
    }

    return errors;
  }
}

export default TodoComponent;
