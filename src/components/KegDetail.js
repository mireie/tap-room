import React from "react";
import PropTypes from "prop-types"

export default function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1 className="display-1">{keg.name} - {keg.brand}</h1>
      <ul>
        <li>Brewry: {keg.brand}</li>
        <li>ABV: {keg.abv}%</li>
        <li>Quantity: {keg.qty} pints remain</li>
        <li>ID: {keg.id}</li>
      </ul>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}