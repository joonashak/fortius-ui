/**
 * One item, a past workout or a future plan, in workout list.
 */
import React from 'react';
import moment from 'moment';
import { MdChevronRight } from 'react-icons/md';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default ({ session }) => {
  // Format title
  const date = moment(session.createdAt);
  const diff = moment.duration(moment().diff(date));
  const week = moment.duration(7, 'd');

  // TODO: Add today and yesterday.
  const title = (diff < week)
    ? `Last ${date.format('dddd')}`
    : date.format('YYYY-MM-DD HH:MM');

  return (
    <Row className="big-list-item">
      <Col className="d-flex align-items-center">
        <h5>{title}</h5>
      </Col>
      <Col xs={3} className="d-flex align-items-center">
        <MdChevronRight size="100%" className="nav-icon" />
      </Col>
    </Row>
  );
};
