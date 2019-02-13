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
      'arrow-parens': 0,
      /*
       * Allow shadow names for redux actions. All dispatchers used through props must be added to the list below.
       * 
       * (Leads to much cleaner syntax in source and is confusing really only if you don't know redux, in which
       * case you'll be confused anyway.)
       */
      'no-shadow': [
          2,
          {
              allow: [
                  'unsetToken',
                  'resetAlert',
                  'setToken',
                  'newAlert',
              ]
          }
      ],
      // Nested ternaries are great! If *expressions* vs. statements...
      'no-nested-ternary': 0,
      'no-unused-expressions': [2, { allowTernary: true }],
      /*
       * Allow proper indentation of nested ternaries, like so:
       * foo()
       *   ? bar()
       *   : baz()
       */
      'indent': [2, 2, { ignoredNodes: ['ConditionalExpression'] }],
      // Deprecated, replaced with label-has-associated-control (configured below)
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/label-has-associated-control': [2, { 'controlComponents': ['Text'] }],
  },
};