import React from "react";
import PropTypes from "prop-types"

export default function KegDetail(props) {
  return (
    <React.Fragment>
      <p>Keg Detail</p>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}