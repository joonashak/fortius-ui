/**
 * List of past workouts. The current workout, if any, is also shown here.
 */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../Header';
import DynamicMenu from '../Header/DynamicMenu';
import WorkoutList from '../WorkoutList';


export default () => (
  <Container className="fortius-view" fluid>
    <Header title="Workouts">
      <DynamicMenu />
    </Header>
    <WorkoutList type="workouts" />
  </Container>
);
