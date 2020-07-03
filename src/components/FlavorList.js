import React from 'react';
import Flavor from './Flavor';
import PropTypes from 'prop-types';

function FlavorList(props) {
  let scoopButton = <button type='button' id='scoop'>Scooped!</button>;
  let restockButton = <button type='button' id='restock'>Order New Tub</button>;
  return (
    <React.Fragment>
      <hr />
      <hr />
      {props.flavorList.map((flavor) =>
        <Flavor
          name={flavor.name}
          allergens={flavor.allergens}
          creamery={flavor.creamery}
          scoops={flavor.scoops}
          id={flavor.id}
          {...scoopButton}
          {...restockButton} />
      )}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  flavorList: PropTypes.array
};

export default FlavorList;