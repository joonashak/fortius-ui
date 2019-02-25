/**
 * Header with links for ordering, scrolling to top and editing list items.
 */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdImportExport, MdArrowUpward } from 'react-icons/md';


export default () => (
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
);
