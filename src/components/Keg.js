import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap"

export default function Keg(props) {
  return(
    <React.Fragment>
      <div className="col-6 mb-3">
        <Card>
          <Card.Body>
            <Card.Title onClick={() => props.whenKegClicked(props.id)}>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
            <ul>
              <li>Brewry: {props.brand}</li>
              <li>ABV: {props.abv}</li>
              <li>Quantity: {props.qty}</li>
              <li>ID: {props.id}</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}