import React, { Component } from "react";
import { Form, Field } from "formik";
import CustomErrorMessage from "./CustomErrorMessage";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SketchPicker } from 'react-color';

class MyForm extends Component {
  render() {
    console.log(this.props);
    const {setFieldValue, values} = this.props;
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
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>

              <CKEditor
                name="wysiwygdemo"
                editor={ ClassicEditor }
                data={values.wysiwygdemo}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    setFieldValue("wysiwygdemo", data);
                }}
              />
              <CustomErrorMessage name="wysiwygdemo" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">
                Example Colorpicker
              </label>

              <SketchPicker
                color={ values.favoColor }
                onChangeComplete={ color => setFieldValue('favoColor', color.hex) }
              />

              <CustomErrorMessage name="wysiwygdemo" />
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
