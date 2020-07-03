import React from 'react';
import PropTypes from 'prop-types';

function Flavor(props) {
  return (
    <React.Fragment>
      <h3>Name: {props.name}</h3>
      <h6>Allergy Notes: {props.allergens}</h6>
      <h5>Tub Size: {props.size}</h5>
      <h5>Scoops Remaining: {props.scoops}</h5>
    </React.Fragment>
  )
};

Flavor.propTypes = {
  name: PropTypes.string.isRequired,
  allergens: PropTypes.string,
  size: PropTypes.number.isRequired,
  scoops: PropTypes.number
};

export default Flavor;