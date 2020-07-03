import React from 'react';
import FlavorList from './FlavorList';
import AddFlavorForm from './AddFlavorForm';
import FlavorDetail from './FlavorDetail';

class IceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterFlavorList: [],
      selectedFlavor: null
    }
  }

  handleClick = () => {
    if (this.state.selectedFlavor != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedFlavor: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const newMasterFlavorList = this.state.masterFlavorList.concat(newFlavor);
    this.setState({
      masterFlavorList: newMasterFlavorList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({ selectedFlavor: selectedFlavor });
  }

  //Need to add this method & then call it in render by calling scoopButton, then mirror for restockButton
  // handleScooping = () => {
  //   this.setState({

  //   })
  // }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail flavor={this.state.selectedFlavor} />
      buttonText = "Return to Flavor List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddFlavorForm onAddingFlavor={this.handleAddingNewFlavorToList} />
    } else {
      currentlyVisibleState = <FlavorList flavorList={this.state.masterFlavorList} onFlavorSelection={this.handleChangingSelectedFlavor} />;
      buttonText = "Add Flavor";
    }


    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br />
        <br />
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default IceCreamControl;
