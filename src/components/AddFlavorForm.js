import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddFlavorForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleAddFlavorFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );

  function handleAddFlavorFormSubmission(event) {
    event.preventDefault();
    props.onAddingFlavor({
      name: event.target.name.value,
      allergens: event.target.allergens.value,
      creamery: event.target.creamery.value,
      scoops: 100,
      id: v4()
    })
  }
}

AddFlavorForm.propTypes = {
  onAddingFlavor: PropTypes.func
};

export default AddFlavorForm;







{/* <div className='radio'>
<label>
  <input
    type="radio"
    value="5"
    checked={this.state.selectedOption === "Male"}
    onChange={this.onValueChange}
  />
  5 Gallons
</label>
</div>
<div className='radio'>
<label>
  <input
    type="radio"
    value="3"
    checked={this.state.selectedOption === "Male"}
    onChange={this.onValueChange}
  />
  3 Gallons */}