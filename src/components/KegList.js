import React from "react";
import PropTypes from "prop-types"
import Keg from "./Keg";

const mainKegList = [
  {
    name: 'RPM IPA',
    brand: 'Boneyard',
    price: 5,
    qty: 124,
    abv: 6.5
  },
  {
    name: 'Pliny the Elder',
    brand: 'Russian River Brewing',
    price: 7,
    qty: 124,
    abv: 8
  },
  {
    name: 'Astrovision',
    brand: 'Ruse',
    price: 6,
    qty: 124,
    abv: 6.5
  },
]

export default function KegList(props) {
  return (
    <React.Fragment>
      {mainKegList.map((keg, index) =>
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

}