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
      selectedFlavor: null,
      editing: false,
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

  handleScooping = (id) => {
    const newScoopedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    const flavorIndex = this.state.masterFlavorList.indexOf(newScoopedFlavor);
    if (newScoopedFlavor.scoops >= 1) {
      const newScoopsNum = newScoopedFlavor.scoops - 1;
      let editedMasterFlavorList = this.state.masterFlavorList
        .filter(flavor => flavor.id != newScoopedFlavor.id);
      editedMasterFlavorList.splice(flavorIndex, 0, { ...newScoopedFlavor, scoops: newScoopsNum });
      this.setState({
        masterFlavorList: editedMasterFlavorList,
      })
    }
  }

  handleRestocking = (id) => {
    const newRestockedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    const flavorIndex = this.state.masterFlavorList.indexOf(newRestockedFlavor);
    const newScoopsNum = newRestockedFlavor.scoops + 100;
    let editedMasterFlavorList = this.state.masterFlavorList
      .filter(flavor => flavor.id != newRestockedFlavor.id);
    editedMasterFlavorList.splice(flavorIndex, 0, { ...newRestockedFlavor, scoops: newScoopsNum });
    this.setState({
      masterFlavorList: editedMasterFlavorList,
    })
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
    this.setState({ selectedFlavor: selectedFlavor });
  }

  handleDeletingFlavor = (id) => {
    const newMasterFlavorList = this.state.masterFlavorList.filter(flavor => flavor.id !== id);
    this.setState({
      masterFlavorList: newMasterFlavorList,
      selectedFlavor: null
    });
  }

  handleEditClick = () => {
    console.log("You did it!");
    this.setState({ editing: true });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail
        flavor={this.state.selectedFlavor}
        onClickingDelete={this.handleDeletingFlavor}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Flavor List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddFlavorForm onAddingFlavor={this.handleAddingNewFlavorToList} />
    } else {
      currentlyVisibleState = <FlavorList
        flavorList={this.state.masterFlavorList}
        onFlavorSelection={this.handleChangingSelectedFlavor}
        onScooping={this.handleScooping}
        onRestocking={this.handleRestocking} />;
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
