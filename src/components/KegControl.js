import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKeg';

export default class KegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisisbleOnPage: false
    }
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisisbleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}