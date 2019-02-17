/**
 * New user registration form.
 */
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import InputField from './InputField';
import NavButton from '../utils/NavButton';


const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required.'),
  email: yup.string().email('E-mail address is not valid.'),
  password: yup.string().required('Password is required.'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export default ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched }) => (
      <Form>
        <div className="fields">
          <InputField
            name="username"
            label="Username"
            errors={errors}
            touched={touched}
          />
          <InputField
            name="email"
            label="E-mail"
            footnote="(Optional, but the only way to recover access if you lose your password.)"
            errors={errors}
            touched={touched}
          />
          <InputField
            name="password"
            label="Password"
            errors={errors}
            touched={touched}
          />
        </div>
        <button type="submit" className="button-accent mt-5">Sign Up</button>
        <NavButton to="/" text="Back" />
      </Form>
    )}
  </Formik>
);
