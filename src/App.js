import React, { Component } from "react";
import { Formik } from "formik";
import MyForm from "./MyForm";

class App extends Component {
  submitHandler = values => {
    console.log(values);
  };

  validate = values => {
    const errors = {};

    const requiredFields = ["firstname", "lastname", "email", "message"];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = "required";
      }
    });

    return errors;
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light mt-2">
          <a className="navbar-brand" href="#">
            Our First Form
          </a>
        </nav>
        <Formik
          onSubmit={this.submitHandler}
          validate={this.validate}
          initialValues={{
            firstname: "Jannick",
            lastname: "",
            email: "",
            message: ""
          }}
        >
          <MyForm />
        </Formik>
      </div>
    );
  }
}

export default App;
