import React from "react";

function Login() {
  return (
    <div className="col-md-4 offset-md-4">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
