/**
 * Login form.
 */
import React from 'react';
import { Formik, Form } from 'formik';
import InputField from './InputField';
import NavButton from '../utils/NavButton';


const initialValues = {
  username: '',
  password: '',
};

export default ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        <div className="fields">
          <InputField
            name="username"
            label="Username"
          />
          <InputField
            name="password"
            label="Password"
            type="password"
          />
        </div>
        <button type="submit" className="button-accent mt-5">Log In</button>
        <NavButton to="/" text="Back" />
      </Form>
    )}
  </Formik>
);
