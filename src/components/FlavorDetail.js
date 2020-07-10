import React from "react";
import PropTypes from "prop-types";

function FlavorDetail(props) {
  const { flavor, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Flavor Detail</h3>
      <h5>{flavor.name} - {flavor.creamery}</h5>
      <p><em>Allergens: {flavor.allergens}</em></p>
      <h5>Scoops Remaining: {flavor.scoops}</h5>
      <hr />
      <button onClick={props.onClickingEdit}>Edit Flavor Details</button>
      <button onClick={() => onClickingDelete(flavor.id)}>Discontinue Flavor</button>
    </React.Fragment>
  );
}

FlavorDetail.propTypes = {
  flavor: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default FlavorDetail;
