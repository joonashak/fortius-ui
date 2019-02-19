/**
 * Form with confirmation to delete this user account.
 */
import React from 'react';
import userService from '../../services/userService';
import { CombinedConsumer } from '../contexts/CombinedContext';


class DeleteAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  toggle = () => this.setState((prevState) => ({ expanded: !prevState.expanded }));

  confirmDelete = async () => {
    const { newAlert, unsetToken } = this.props;
    newAlert('Deleting your account...', 'info');
    const { error } = await userService.deleteUser();
    error
      ? newAlert('Could not delete the account.', 'error')
      : newAlert('Your account has been deleted.', 'info');
    unsetToken();
  };

  render = () => {
    const { expanded } = this.state;

    return expanded
      ? (
        <div>
          <div className="fields pt-4 pb-2">
            <p>
              All of your data will be permanently deleted!
              If you are sure you want to delete your account, click Confirm.
            </p>
          </div>
          <button onClick={this.confirmDelete} type="button" className="button-danger">
            Confirm Delete
          </button>
          <button onClick={this.toggle} type="button" className="button-danger-accent">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={this.toggle}
            type="button"
            className="button-danger"
          >
            Delete Account
          </button>
        </div>
    );
  };
}

export default (props) => (
  <CombinedConsumer>
    {({ alertContext, userContext }) => (
      <DeleteAccount
        {...props}
        newAlert={alertContext.newAlert}
        unsetToken={userContext.unsetToken}
      />
    )}
  </CombinedConsumer>
);
