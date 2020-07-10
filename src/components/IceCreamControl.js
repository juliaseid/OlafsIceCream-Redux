import React from 'react';
import FlavorList from './FlavorList';
import AddFlavorForm from './AddFlavorForm';
import FlavorDetail from './FlavorDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class IceCreamControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedFlavor: null,
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
    const { dispatch } = this.props;
    const { id, name, allergens, creamery } = newFlavor;
    const action = {
      type: 'ADD_FLAVOR',
      id: id,
      name: name,
      allergens: allergens,
      creamery: creamery,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.props.masterFlavorList[id];
    this.setState({ selectedFlavor: selectedFlavor });
  }

  handleEditingFlavorInList = (flavorToEdit) => {
    const { dispatch } = this.props;
    const { id, name, allergens, creamery } = flavorToEdit;
    const action = {
      type: 'ADD_FLAVOR',
      id: id,
      name: name,
      allergens: allergens,
      creamery: creamery,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedFlavor: null
    });
  }

  handleDeletingFlavor = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_FLAVOR',
      id: id
    }
    dispatch(action);
    this.setState({ selectedFlavor: null });
  }

  handleScooping = (id) => {
    const newScoopedFlavor = this.props.masterFlavorList.filter(flavor => flavor.id === id)[0];
    const flavorIndex = this.props.masterFlavorList.indexOf(newScoopedFlavor);
    if (newScoopedFlavor.scoops >= 1) {
      const newScoopsNum = newScoopedFlavor.scoops - 1;
      let editedMasterFlavorList = this.props.masterFlavorList
        .filter(flavor => flavor.id != newScoopedFlavor.id);
      editedMasterFlavorList.splice(flavorIndex, 0, { ...newScoopedFlavor, scoops: newScoopsNum });
      this.setState({
        masterFlavorList: editedMasterFlavorList,
      })
    }
  }

  handleRestocking = (id) => {
    const newRestockedFlavor = this.props.masterFlavorList.filter(flavor => flavor.id === id)[0];
    const flavorIndex = this.props.masterFlavorList.indexOf(newRestockedFlavor);
    const newScoopsNum = newRestockedFlavor.scoops + 100;
    let editedMasterFlavorList = this.props.masterFlavorList
      .filter(flavor => flavor.id != newRestockedFlavor.id);
    editedMasterFlavorList.splice(flavorIndex, 0, { ...newRestockedFlavor, scoops: newScoopsNum });
    this.setState({
      masterFlavorList: editedMasterFlavorList,
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedFlavor != null) {
      currentlyVisibleState = <FlavorDetail flavor={this.state.selectedFlavor} />
      buttonText = "Return to Flavor List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddFlavorForm onAddingFlavor={this.handleAddingNewFlavorToList} />
    } else {
      currentlyVisibleState = <FlavorList
        flavorList={this.props.masterFlavorList}
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

IceCreamControl.propTypes = {
  masterFlavorList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterFlavorList: state
  }
}

IceCreamControl = connect(mapStateToProps)(IceCreamControl);

export default IceCreamControl;
