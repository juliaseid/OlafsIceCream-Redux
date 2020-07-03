import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function AddFlavorForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleAddFlavorFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Flavor Name' /><br />
        <input
          type='text'
          name='allergens'
          placeholder='Allergens' /><br />
        <input
          type='text'
          name='creamery'
          placeholder='Creamery' /><br />
        <button type='submit'>Add Flavor</button>
      </form>
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