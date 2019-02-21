/**
 * This component has twofold usage: It displays either a list of past workouts or a list of
 * future plans.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdImportExport, MdArrowUpward } from 'react-icons/md';
import NavButton from '../utils/NavButton';
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
    <Row className="list-header">
      <Col xs={4} className="list-header-left">
        <MdImportExport size="100%" className="list-header-icon" />
        Date
      </Col>
      <Col className="list-header-middle">
        <MdArrowUpward size="100%" className="list-header-icon" />
      </Col>
      <Col xs={4} className="list-header-right">
        Edit
      </Col>
    </Row>
    <Row>
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
