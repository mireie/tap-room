import React from "react"
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'


export default function KegForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group
          className="mb-3"
          controlId="kegName">
          <Form.Label>Keg Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="kegBrand">
          <Form.Label>Brewery</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="kegPrice">
          <Form.Label>Pint Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            step=".01"
            required
          >
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="kegABV">
          <Form.Label>ABV</Form.Label>
          <Form.Control
            type="number"
            name="abv"
            required
            step=".1"
          >
          </Form.Control>
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          {props.formButtonText}
        </Button>
      </Form>
    </React.Fragment>
  );


}

KegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}