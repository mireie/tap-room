import React from "react"
import { v4 } from 'uuid'
import PropTypes from "prop-types"

export default function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        price: event.target.price.value,
        alcoholContent: event.target.alcoholContent.value,
        qty: event.target.qty.value,
        id: v4()
      }
    )
  }

  return (
    <React.Fragment>
      <p>New Keg Form</p>
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}