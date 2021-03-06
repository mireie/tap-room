import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKeg';
import { Button } from 'react-bootstrap';
import KegDetail from './KegDetail';

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
          abv: 6.5,
          id: "beer-1"
        },
        {
          name: 'Pliny the Elder',
          brand: 'Russian River Brewing',
          price: 7,
          qty: 5,
          abv: 8,
          id: "beer-2"
        },
        {
          name: 'Astrovision',
          brand: 'Ruse',
          price: 6,
          qty: 124,
          abv: 6.5,
          id: "beer-3"
        }
      ],
      selectedKeg: null
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0]
    this.setState({ selectedKeg: selectedKeg })
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      })
    } else
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }))
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg)
    this.setState({ mainKegList: newMainKegList, formVisibleOnPage: false })
  }

  handleRemovePint = (kegToEdit) => {
    let updatedKeg = kegToEdit
    --updatedKeg.qty
    if (updatedKeg.qty < 0) {
      updatedKeg.qty = 0
    } else {
      const editedMainKegList = this.state.mainKegList
        .filter(keg => keg.id !== kegToEdit.id)
        .concat(updatedKeg)
      this.setState({
        mainKegList: editedMainKegList
      })
    }
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id)
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    })
  }

  render() {
    let currentlyVisibleState = null
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail
        keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList
        kegList={this.state.mainKegList.sort(dynamicSort("name"))}
        onKegSelection={this.handleChangingSelectedKeg}
        subtractPint={this.handleRemovePint}
      />
      buttonText = "Add a New Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button className="mt-3" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    )
  }
}

const dynamicSort = (prop) => {
  let sortOrder = 1;
  return function (a, b) {
    const result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
    return result * sortOrder;
  }
}