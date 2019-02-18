/**
 * User settings editing view.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header';
import DynamicMenu from '../Header/DynamicMenu';
import { CombinedConsumer } from '../contexts/CombinedContext';
import SettingsForm from '../forms/SettingsForm';
import userService from '../../services/userService';


const SettingsView = ({ newAlert, resetAlert }) => {
  const update = async (data) => {
    newAlert('Updating settings, please wait...', 'info');
    const { error } = await userService.update(data);
    resetAlert();
  };

  return (
    <Container className="fortius-view" fluid>
      <Header title="Settings">
        <DynamicMenu />
      </Header>
      <Row className="content center pt-4">
        <Col xs={12}>
          <SettingsForm onSubmit={update} />
        </Col>
      </Row>
    </Container>
  );
};

export default (props) => (
  <CombinedConsumer>
    {({ alertContext }) => (
      <SettingsView
        {...props}
        newAlert={alertContext.newAlert}
        resetAlert={alertContext.resetAlert}
      />
    )}
  </CombinedConsumer>
);
