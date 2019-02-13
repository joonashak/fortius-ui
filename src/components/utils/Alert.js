/**
 * Modal notification dialog.
 * Dialog pops up on the screen capturing focus from the underlying app. Displayed and reset using
 * redux and alertReducer.
 * Variants are 'info' and 'error'.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { resetAlert } from '../../reducers/alertReducer';
import { AlertConsumer } from '../contexts/AlertContext';


const mapStateToProps = (state) => {
  const { message, variant } = state.alert;
  return { message, variant };
};

const mapDispatchToProps = { resetAlert };

const Alert = ({ message, variant, resetAlert }) => (
  message === ''
    ? null
    : (
      <Modal
        onHide={resetAlert}
        dialogClassName={`f-modal-${variant}`}
        centered
        show
      >
        <Modal.Body>
          <p>
            {message}
          </p>
        </Modal.Body>
      </Modal>
    )
);

Alert.defaultProps = {
  message: '',
  variant: 'info',
};

Alert.propTypes = {
  message: PropTypes.string,
  variant: (props, propName, componentName) => { // eslint-disable-line consistent-return
    const valids = ['', 'info', 'error'];
    if (!valids.includes(props[propName])) {
      return new Error(`Invalid prop '${propName}' supplied to component '${componentName}'`);
    }
  },
};

export default (props) => (
  <AlertConsumer>
    {({ message, variant, resetAlert }) => (
      <Alert
        {...props}
        message={message}
        variant={variant}
        resetAlert={resetAlert}
      />
    )}
  </AlertConsumer>
);

/*
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Alert),
);
*/
