/**
 * User settings form.
 */
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import InputField from '../forms/InputField';


const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail address is not valid.'),
  password: yup.string(),
});

export default ({ onSubmit, initialValues }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ errors, touched, values }) => (
      <Form>
        <div className="fields">
          <InputField
            name="email"
            label="E-mail"
            footnote="(Optional, but the only way to recover access if you lose your password.)"
            errors={errors}
            touched={touched}
            value={values.email}
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
      </Form>
    )}
  </Formik>
);
