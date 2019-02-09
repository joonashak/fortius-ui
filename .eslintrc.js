module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
      es6: true,
      browser: true,
  },
  rules: {
      'react/jsx-filename-extension': 0,
      // This is highly annoying when you know you're gonna need state...
      'react/prefer-stateless-function': 0,
      'react/prop-types': 0,
      'react/destructuring-assignment': 0,
      'react/no-confusing-arrow': 0,
      // Allow shadow names for redux actions
      // (Much cleaner syntax and confusing only if you don't know redux, in which case you'll be confused anyway.)
      'no-shadow': [
          'error',
          {
              allow: [
                  'unsetToken',
                  'resetAlert',
              ]
          }
      ],
      // Nested ternaries are great! If *expressions* vs. statements...
      'no-nested-ternary': 0,
  },
};