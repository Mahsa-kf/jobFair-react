import React from 'react';

const Form = () => {
  return (
    <form className="reg_form">
      <div className="input col1-2">
        <label className="hidden" for="lname">First Name:</label>
        <input className="reg_input" type="text" id="fname" name="fname" value="" placeholder="First name" />
      </div>
      <div className="input col1-2">
        <label className="hidden" for="lname">Last Name:</label>
        <input className="reg_input" type="text" id="lname" name="lname" value="" placeholder="Last name" />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="email">Email:</label>
        <input className="reg_input " type="email" id="email" name="email" value="" placeholder="Email" />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="website">Website:</label>
        <input className="reg_input" type="text" id="website" name="website" value="" placeholder="Website" />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="phone">Phone Number:</label>
        <input className="reg_input" type="text" id="phone" name="phone" value="" placeholder="Phone Number" />
      </div>
      <div className="input col1-1">
        <label className="hidden" for="message">Message:</label>
        <textarea className="reg_input" id="message" name="message" rows="8" cols="100"></textarea>
      </div>
      <div className="input col1-1">
        <input className="submit_btn" type="submit" value="Submit"></input>
      </div>
    </form>
  )
}

export default Form;