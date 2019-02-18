/**
 * User settings form.
 */
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import InputField from './InputField';
import NavButton from '../utils/NavButton';


const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail address is not valid.'),
  password: yup.string(),
});

const initialValues = {
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
            name="email"
            label="E-mail"
            footnote="(Optional, but the only way to recover access if you lose your password.)"
            errors={errors}
            touched={touched}
          />
          <InputField
            name="password"
            label="New Password"
            type="password"
            errors={errors}
            touched={touched}
          />
        </div>
        <button type="submit" className="button-accent mt-5">Save</button>
        <NavButton to="/" text="Back" />
      </Form>
    )}
  </Formik>
);
