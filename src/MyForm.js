import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";

class MyForm extends Component {
  render() {
    return (
      <Form>
        <div className="row mt-4">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Firstname</label>
              <Field
                type="text"
                name="firstname"
                className="form-control"
                id="exampleFormControlInput1"
              />
              <CustomErrorMessage name="firstname" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput2">Lastname</label>
              <Field
                type="text"
                name="lastname"
                className="form-control"
                id="exampleFormControlInput2"
              />
              <CustomErrorMessage name="lastname" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3">Email address</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
              />
              <CustomErrorMessage name="email" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>

              <Field
                component="textarea"
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
              <CustomErrorMessage name="message" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="submit"
              value="Send Message!"
              className="btn btn-primary float-right"
            />
          </div>
        </div>
      </Form>
    );
  }
}

export default MyForm;
