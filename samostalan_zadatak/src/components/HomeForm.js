import React from "react";

function HomeForm({
  handleSubmit,
  error,
  formData,
  handleInputChange,
  handleReset,
  handleClick,
}) 

{
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h2>Contact form</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}

          <div className="form-group">
            <label htmlFor="name">First name*</label>
            <input
              type="text"
              placeholder="First name"
              maxLength="30"
              name="firstName"
              id="name"
              value={formData.firstName}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="surname">Last name*</label>
            <input
              name="lastName"
              id="surname"
              type="surname"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of birth*</label>
            <input
              name="dob"
              id="date"
              type="date"
              placeholder="Date of birth"
              value={formData.dob}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="select">Contact type*</label>
            <select
              className="form-group-select"
              name="contactType"
              id="contacttype"
              value={formData.contactType}
              onChange={handleInputChange}
            >
              <option value="E-mail">E-mail</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact*</label>
            <input
              name="contact"
              id="contact"
              type="text"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleInputChange}
            ></input>
          </div>

          <div>
            <button className="form-group-btn" type="submit">
              Submit
            </button>
          </div>

          <br></br>

          <div>
            <button
              className="form-group-btn"
              type="reset"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
          <br></br>
          <div>
            <button
              className="form-group-btn"
              type="reset"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default HomeForm;
