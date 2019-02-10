/**
 * Login form.
 */
import React from 'react';
import { Form, Text } from 'react-form';
import NavButton from '../utils/NavButton';


export default ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {
      formApi => (
        <form onSubmit={formApi.submitForm}>
          <div className="fields">
            <Text field="username" type="text" id="username" />
            <label htmlFor="username">Username</label>
            <Text field="password" type="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="button-accent mt-5">
            Log In
          </button>
          <NavButton to="/" text="Back" />
        </form>
      )
    }
  </Form>
);
