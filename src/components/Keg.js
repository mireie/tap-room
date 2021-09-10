import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Row, Col } from "react-bootstrap"

export default function Keg(props) {
  const keg = {
    name: props.name,
    brand: props.brand,
    qty: props.qty,
    id: props.id,
    abv: props.abv
  }


  const remainPercent = Math.floor((props.qty / 144) * 100)
  const cardStyles = {
    background: `linear-gradient(to top, #f28e1c ${remainPercent}%, white 0%)`
  }


  let sellText = "Sell Pint"
  let sellVariant = "success"
  if (props.qty < 1) {
    sellText = "Keg's bone dry!"
    sellVariant = "light"
  }

  return (
    <React.Fragment>
      <div className="col-md-4 mb-3">
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title onClick={() => props.whenKegClicked(props.id)}>{props.name}</Card.Title>
                <Card.Text>
                  {props.description}
                </Card.Text>
                <ul>
                  <li>Brewery: {props.brand}</li>
                  <li>ABV: {props.abv}</li>
                  <li>Quantity: {props.qty}</li>
                </ul>
                <Button
                  type="submit"
                  id={"id-" + props.id}
                  variant={sellVariant}
                  className="m-3"
                  onClick={() => props.pintMinus(keg)} >
                  {sellText}
                </Button>
              </Col>
              <Col
                style={cardStyles}>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
    </React.Fragment >
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