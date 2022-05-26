import { Link } from "react-router-dom";
import { useState } from "react";

import "../pages/Login";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitFn = () => {
    let obj = { name1: "", email1: "" };
    obj.name1 = name;
    obj.email1 = email;
    localStorage.setItem("contact", JSON.stringify(obj));
    setName("");
    setEmail("");
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div>
      <div className="bg-dark px-5 py-2 text-warning">
        <div className="row">
          <div className="col">
            <h3>Kwitter</h3>
          </div>
        </div>
      </div>

      <div className="signupContainer">
        <div className="container text-center my-5">
          <h2>Hola, Welcome to Kwitter</h2>

          {!showSignup ? (
            <div style={{ width: 18 + "rem" }} className="bg-light px-2 py-3">
              <h4>Login</h4>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control m-1"
                    placeholder="Password"
                  />
                  <div className="input-group">
                    <Link to="/home">
                      <input
                        type="submit"
                        className="btn btn-primary form-control m-1 "
                        value="Login as a User"
                        onClick={submitFn}
                      />
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-info " onClick={() => toggleSignup()}>
                      Don't have an account? Register here!
                    </p>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div style={{ width: 18 + "rem" }} className="bg-light ">
              <h4>Register</h4>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Username"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control m-1"
                    placeholder="Mobile"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    className="form-control m-1"
                    placeholder="Password"
                  />
                  <div className="input-group">
                    <Link to="/home">
                      <input
                        type="submit"
                        className="btn btn-primary form-control m-1 "
                        value="Register as a User"
                        onClick={submitFn}
                      />
                    </Link>
                  </div>
                  <div className="text-center">
                    <p className="text-info " onClick={() => toggleSignup()}>
                      Already have an account? Login here!
                    </p>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
