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


  const remainPercent = Math.floor((props.qty / 124) * 100)
  const cardStyles = {
    background: `linear-gradient(to top, #f28e1c ${remainPercent}%, #efefef 0%)`,
    border: "solid #eee 2px"
  }


  let sellText = "Sell Pint"
  let sellVariant = "success"
  if (props.qty < 1) {
    sellText = "Keg's bone dry!"
    sellVariant = "light"
  }

  return (
    <React.Fragment>
      <div className="col-md-6 mb-3">
        <Card>
          <Card.Body>
            <Row>
              <Card.Title
                onClick={() => props.whenKegClicked(props.id)}
                className="display-3">
                {props.name}
              </Card.Title>
              <Col>
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
                className="col-4"
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