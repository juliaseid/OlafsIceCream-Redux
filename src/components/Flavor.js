import React from 'react';
import PropTypes from 'prop-types';

function Flavor(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenFlavorClicked(props.id)}>
        <h3>Flavor: {props.name}</h3>
        <h6><em>Allergens: {props.allergens}</em></h6>
        <h5>Creamery: {props.creamery}</h5>
        <h5>Scoops Remaining: {props.scoops}</h5>
      </div>
      <button type='button' id='scooped'>Scooped!</button>
      <button type='button' id='restock'>Order New Tub</button>
    </React.Fragment>
  )
};

Flavor.propTypes = {
  name: PropTypes.string.isRequired,
  allergens: PropTypes.string,
  creamery: PropTypes.string,
  scoops: PropTypes.number,
  id: PropTypes.string,
  whenFlavorClicked: PropTypes.func
};

export default Flavor;