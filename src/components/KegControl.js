import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKeg';
import { Button } from 'react-bootstrap'

export default class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
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
        }
      ]
    }
  }

  

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }))
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg)
    this.setState({mainKegList: newMainKegList, formVisibleOnPage: false})
  }

  render(){
    let currentlyVisibleState = null
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} />
      buttonText = "Add a New Keg"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <Button className="mt-3" onClick = {this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )
  }
}