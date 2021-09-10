import React from "react"
import { v4 } from 'uuid'
import PropTypes from "prop-types"
import KegForm from "./KegForm"

export default function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      abv: event.target.abv.value,
      quantity: 124,
      price: event.target.price.value,
      id: v4()
    })
  }



  return (
    <React.Fragment>
      <h1 className="display-1">Add a Keg</h1>
      <KegForm
        formSubmissionHandler={handleNewKegFormSubmission}
        formButtonText="Add Keg"
      />
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}