import React from 'react';
import { Field } from 'formik';


export default ({
  name,
  errors,
  touched,
  label,
}) => (
  <div>
    <Field name={name} />
    <label htmlFor={name}>{label}</label>
    {
      errors && touched && errors[name] && touched[name]
        ? (
          <label htmlFor={name} className="validation-error">
            {errors[name]}
          </label>
        ) : null
    }
  </div>
);
