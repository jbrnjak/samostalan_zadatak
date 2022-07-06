import React, { useState } from "react";

const INITIAL_STATE = { username: "", password: "" }; //inicijalno stanje koje je potrerbno za reset forme

function LoginForm({ login, error, setError }) {
  const [details, setDetails] = useState(INITIAL_STATE);

  const submitHandler = (e) => {
    //handler koji se izvršava klikom na submit
    e.preventDefault();
    login(details);
  };

  const handleReset = () => {
    //handler koji se izvršava klikom na reset a vraća i error i username i password na inicijalno stanje odnosno prazan string
    setError("");
    setDetails(INITIAL_STATE);
  };
  console.log(error);
  console.log(setError);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login form</h2>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              maxLength="30"
              name="username"
              id="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            ></input>
          </div>

          <div>
            <button className="form-group-button" type="submit">
              Submit
            </button>
          </div>

          <br></br>

          <div>
            <button
              className="form-group-button-reset"
              type="reset"
              onClick={handleReset}
            >
              Clear
            </button>
          </div>
          <br></br>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
