import React from "react";
import PropTypes from "prop-types"
import { Button, Row, Col } from 'react-bootstrap'

export default function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <Row>
        <h1 className="display-1">{keg.name} - {keg.brand}</h1>
        <Col>
          <h2 className="display-2">Details</h2>
          <ul>
            <li>Brewry: {keg.brand}</li>
            <li>ABV: {keg.abv}%</li>
            <li>Quantity: {keg.qty} pints remain</li>
            <li>ID: {keg.id}</li>
          </ul>
        </Col>
        <Col
          className="alert-danger">
          <h2 className="display-2">Danger Zone</h2>
          <Row>
            <Col></Col>
            <Col>           
              <Button
                onClick={() => onClickingDelete(keg.id)}
                className="btn-danger py-3 px-5">
                Delete
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}