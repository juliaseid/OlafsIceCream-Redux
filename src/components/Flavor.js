import React from 'react';
import PropTypes from 'prop-types';

function Flavor(props) {
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h6>Allergy Notes: {props.allergens}</h6>
      <h5>Creamery: {props.creamery}</h5>
      <h5>Scoops Remaining: {props.scoops}</h5>
    </React.Fragment>
  )
};

Flavor.propTypes = {
  name: PropTypes.string.isRequired,
  allergens: PropTypes.string,
  creamery: PropTypes.string,
  scoops: PropTypes.number
};

export default Flavor;