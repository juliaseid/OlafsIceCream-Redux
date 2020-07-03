import React from 'react';
import FlavorList from './FlavorList';
import AddFlavorForm from './AddFlavorForm';
import { findAllByTestId } from '@testing-library/react';

class IceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterFlavorList: []
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    this.setState({
      masterFlavorList: newMasterFlavorList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let addFlavorButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddFlavorForm onAddingFlavor={this.handleAddingNewFlavorToList} />
    } else {
      currentlyVisibleState = <FlavorList flavorList={this.state.masterFlavorList} />
      addFlavorButton = <button onClick={this.handleClick}>Add New Flavor</button>
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addFlavorButton}
      </React.Fragment>
    );
  }
}

export default IceCreamControl;
