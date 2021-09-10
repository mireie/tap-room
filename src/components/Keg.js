import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap"

export default function Keg(props) {
  const keg = {
    name: props.name,
    brand: props.brand,
    qty: props.qty,
    id: props.id,
    abv: props.abv
  }

  let sellText = "Sell Pint"
  let sellVariant = "success"
  if (props.qty < 1) {
    sellText = "Keg's bone dry!"
    sellVariant = "light"
  }

  return (
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
            </ul>
            <Button
              type="submit"
              id={"id-"+props.id}
              variant={sellVariant}
              className="m-3"
              onClick={() => props.pintMinus(keg)} >
              {sellText}
            </Button>
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
  whenKegClicked: PropTypes.func,
  pintMinus: PropTypes.func
}