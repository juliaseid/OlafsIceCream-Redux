import React from 'react';
import Flavor from './Flavor';
import PropTypes from 'prop-types';

function FlavorList(props) {

  return (
    <React.Fragment>
      <hr />
      <hr />
      {props.flavorList.map((flavor) =>
        <Flavor
          name={flavor.name}
          allergens={flavor.allergens}
          size={flavor.creamer}
          scoops={flavor.scoops}
          id={flavor.id} />
      )}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  flavorList: PropTypes.array
};

export default FlavorList;