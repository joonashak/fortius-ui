import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetAlert } from '../../reducers/alertReducer';


const mapStateToProps = (state) => {
  const { message, variant } = state.alert;
  return { message, variant };
};
const mapDispatchToProps = { resetAlert };

class Alert extends React.Component {
  componentDidUpdate(prevProps) {
    const { message, resetAlert } = this.props;

    if (prevProps.message === '' && message !== '') {
      setTimeout(() => resetAlert(), 1000);
    }
  }

  render() {
    const { message, variant } = this.props;

    if (message === '') return null;

    return (
      <div
        className={`alert alert-${variant} shadow-sm`}
        role="alert"
      >
        {message}
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Alert),
);
