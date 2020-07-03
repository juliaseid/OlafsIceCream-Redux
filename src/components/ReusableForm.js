import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Flavor' /><br />
        <input
          type='text'
          name='allergens'
          placeholder='Allergens' /><br />
        <input
          type='text'
          name='creamery'
          placeholder='Creamery' /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;