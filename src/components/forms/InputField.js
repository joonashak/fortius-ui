import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

/**
 * Formik-based input field with optional label and validation.
 * Default `type` is 'text'.
 */
const InputField = ({
  name,
  errors,
  touched,
  label,
  type,
}) => (
  <div>
    <Field name={name} type={type} />
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

InputField.defaultProps = {
  label: '',
  type: 'text',
  errors: null,
  touched: null,
};

InputField.propTypes = {
  /** Name to be used as key for this field. */
  name: PropTypes.string.isRequired,
  /** Label displayed in dom (optional). */
  label: PropTypes.string,
  /** HTML `input` `type` (optional). */
  type: PropTypes.string,
  /** Formik's `error` object, accessed with *name* as key. */
  errors: PropTypes.shape({}),
  /** Formik's `touched` object, accessed with *name* as key. */
  touched: PropTypes.shape({}),
};

export default InputField;
