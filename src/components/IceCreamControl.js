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
      selectedFlavor: null,
    }
  }

  handleChangingSelectedFlavor = (id) => {
    const selectedFlavor = this.props.masterFlavorList[id];
    this.setState({ selectedFlavor: selectedFlavor });
  }

  handleClickFlavor = (selectedFlavor) => {
    const { dispatch } = this.props;
    const { id, name, allergens, creamery, scoops } = selectedFlavor;
    const action = {
      type: 'SEE_DETAIL',
      id: id,
      name: name,
      allergens: allergens,
      creamery: creamery,
      scoops: scoops,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_DETAIL'
    }
    dispatch(action2);
  }

  handleReturnClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_DETAIL'
    }
    dispatch(action);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }

  handleAddingNewFlavorToList = (newFlavor) => {
    const { dispatch } = this.props;
    const { id, name, allergens, creamery, scoops } = newFlavor;
    const action = {
      type: 'ADD_FLAVOR',
      id: id,
      name: name,
      allergens: allergens,
      creamery: creamery,
      scoops: scoops,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditingFlavorInList = (flavorToEdit) => {
    const { dispatch } = this.props;
    const { id, name, allergens, creamery, scoops } = flavorToEdit;
    const action = {
      type: 'ADD_FLAVOR',
      id: id,
      name: name,
      allergens: allergens,
      creamery: creamery,
      scoops: scoops,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleDeletingFlavor = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_FLAVOR',
      id: id
    }
    dispatch(action);
    // this.setState({ selectedFlavor: null });
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

    if (this.props.detailVisibleOnPage) {
      currentlyVisibleState =
        <React.Fragment>
          <FlavorDetail flavor={this.state.selectedFlavor} />
          <br />
          <br />
          <button onClick={this.handleReturnClick}>Return to Flavor List</button>
        </React.Fragment>
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddFlavorForm onAddingFlavor={this.handleAddingNewFlavorToList} />
    } else {
      currentlyVisibleState = <FlavorList
        flavorList={this.props.masterFlavorList}
        onFlavorSelection={this.handleChangingSelectedFlavor}
        onScooping={this.handleScooping}
        onRestocking={this.handleRestocking} />;
      buttonText = "Add Flavor";
    };


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
  masterFlavorList: PropTypes.object,
  formVisibleOnPage: PropTypes.func,
  detailVisibleOnPage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterFlavorList: state.masterFlavorList,
    formVisibleOnPage: state.formVisibleOnPage,
    detailVisibleOnPage: state.detailVisibleOnPage
  }
}

IceCreamControl = connect(mapStateToProps)(IceCreamControl);

export default IceCreamControl;
