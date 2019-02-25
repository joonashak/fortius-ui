/**
 * This component has twofold usage: It displays either a list of past workouts or a list of
 * future plans.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavButton from '../utils/NavButton';
import ListHeader from './ListHeader';
import WorkoutListItem from './WorkoutListItem';


const devData = [
  {
    publicId: 'a',
    createdAt: '2019-02-17T21:39:16.307057+00:00',
    isCurrent: false,
  },
  {
    publicId: 'b',
    createdAt: '2019-02-18T21:39:16.307057+00:00',
    isCurrent: true,
  },
  {
    publicId: 'c',
    createdAt: '2019-02-09T21:39:16.307057+00:00',
    isCurrent: false,
  },
  {
    publicId: 'd',
    createdAt: '2019-02-07T21:39:16.307057+00:00',
    isCurrent: false,
  },
];

const WorkoutList = ({ type }) => (
  <div className="content">
    <ListHeader />
    <Row className="after-fixed-list-header">
      <Col xs={12}>
        <NavButton to="/" text="Create New" accent />
        {devData.map((session) => <WorkoutListItem session={session} key={`list-item-${session.publicId}`} />)}
      </Col>
    </Row>
  </div>
);

WorkoutList.propTypes = {
  /** Switch between showing past workouts and future plans. */
  type: PropTypes.oneOf(['history', 'planned']).isRequired,
};

export default WorkoutList;
