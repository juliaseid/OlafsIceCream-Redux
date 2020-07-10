import React from 'react';
import Flavor from './Flavor';
import PropTypes from 'prop-types';

function FlavorList(props) {

  return (
    <React.Fragment>
      {Object.values(props.flavorList).map((flavor) => {
        return <Flavor
          whenFlavorClicked={props.onFlavorSelection}
          name={flavor.name}
          allergens={flavor.allergens}
          creamery={flavor.creamery}
          scoops={flavor.scoops}
          id={flavor.id}
          whenFlavorScooped={props.onScooping}
          whenFlavorRestocked={props.onRestocking}
        />
      })}
    </React.Fragment>
  );
}

FlavorList.propTypes = {
  flavorList: PropTypes.object,
  onFlavorSelection: PropTypes.func,
  onScooping: PropTypes.func,
  onRestocking: PropTypes.func
};

export default FlavorList;