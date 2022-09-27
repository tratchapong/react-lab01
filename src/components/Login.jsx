// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_register_form

import React from "react";

function Login() {
  return (
    <div className="login">
      <form>
        <div className="container">
          <h1>Login</h1>
          <p>Please login.</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <button type="submit" className="registerbtn">
            Login
          </button>
        </div>

        <div className="container signin">
          <p>
            Have no account? <a href="#">Plaese register</a>.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
