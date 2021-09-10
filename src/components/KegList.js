import React from "react";
import PropTypes from "prop-types"
import Keg from "./Keg";

export default function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          qty={keg.qty}
          abv={keg.abv}
          key={index} />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}