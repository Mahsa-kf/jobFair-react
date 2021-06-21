import React, { useState } from 'react';

const Form = () => {

  const formInit = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Website: "",
    Message: ""
  };

  const [data, setData] = useState(formInit)

  const [submitMessage, setSubmitMessage] = useState(false)

  const onInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:11100/Api/Registration/Add', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        response.json();
      }).then(categoryFromApi => {
        setData(formInit);
        setSubmitMessage(
          <div className="reg_success_message col1-1">
            You successfully registered for event. See you soon!
          </div>
        );
      })
  }

  return (
    <form className="reg_form" onSubmit={handleSubmit}>
      <div className="input col1-2">
        <label className="hidden" for="FirstName">First Name:</label>
        <input className="reg_input" type="text" id="FirstName" name="FirstName" placeholder="First name"
          value={data.FirstName} onChange={onInputChange} />
      </div>
      <div className="input col1-2">
        <label className="hidden" for="LastName">Last Name:</label>
        <input className="reg_input" type="text" id="LastName" name="LastName" placeholder="Last name"
          value={data.LastName} onChange={onInputChange} />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="Email">Email:</label>
        <input className="reg_input " type="email" id="Email" name="Email" placeholder="Email"
          value={data.Email} onChange={onInputChange} />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="website">Website:</label>
        <input className="reg_input" type="text" id="Website" name="Website" placeholder="Website"
          value={data.Website} onChange={onInputChange} />
      </div>
      <div className="input col1-3">
        <label className="hidden" for="PhoneNumber">Phone Number:</label>
        <input className="reg_input" type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number"
          value={data.PhoneNumber} onChange={onInputChange} />
      </div>
      <div className="input col1-1">
        <label className="hidden" for="Message">Message:</label>
        <textarea className="reg_input" id="Message" name="Message" rows="8" cols="100"
          value={data.Message} onChange={onInputChange}>
        </textarea>
      </div>
      {submitMessage}
      <div className="input col1-1">
        <input className="submit_btn" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default Form;