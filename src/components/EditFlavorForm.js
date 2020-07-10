import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import React from "react";

function EditFlavorForm(props) {
  const { flavor } = props;

  function handleEditFlavorFormSubmission(event) {
    event.preventDefault();
    props.onEditFlavor({
      name: event.target.name.value,
      allergens: event.target.allergens.value,
      creamery: event.target.creamery.value,
      scoops: flavor.scoops,
      id: flavor.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditFlavorFormSubmission}
        buttonText="Update Flavor Details" />
    </React.Fragment>
  );
}

EditFlavorForm.propTypes = {
  onEditFlavor: PropTypes.func
};

export default EditFlavorForm;