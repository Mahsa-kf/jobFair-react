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
  const [loading, setLoading] = useState(false)

  const [submitMessage, setSubmitMessage] = useState(false)

  const onInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch('http://localhost:11100/Api/Registration/Add', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        response.json();
      }).then(categoryFromApi => {
        setLoading(false);
        setData(formInit);
        setSubmitMessage(
          <div className="reg_message col1-1" style={{color: "green"}}>
            You successfully registered for event. See you soon!
          </div>
        );
      }).catch((error) => {
        setLoading(false);
        setSubmitMessage(
          <div className="reg_message col1-1" style={{color: "red"}}>
            Fail to connect to server! please try again later!
          </div>
        );
      });
  }

  return (
    <form className="reg_form" onSubmit={handleSubmit}>
      <div className="input col1-2">
        <label className="hidden" for="FirstName">First Name:</label>
        <input className="reg_input" type="text" id="FirstName" name="FirstName" placeholder="First name"
          value={data.FirstName} onChange={onInputChange} required="required"/>
      </div>
      <div className="input col1-2">
        <label className="hidden" for="LastName">Last Name:</label>
        <input className="reg_input" type="text" id="LastName" name="LastName" placeholder="Last name"
          value={data.LastName} onChange={onInputChange} required="required"/>
      </div>
      <div className="input col1-3">
        <label className="hidden" for="Email">Email:</label>
        <input className="reg_input " type="email" id="Email" name="Email" placeholder="Email"
          value={data.Email} onChange={onInputChange} required="required"/>
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
        <button className="submit_btn" type="submit" disabled={loading}>
          { loading ? <div class="loader"></div> : "Submit"}
        </button>
      </div>
    </form>
  )
}

export default Form;