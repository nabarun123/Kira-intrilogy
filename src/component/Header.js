import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let data = JSON.parse(localStorage.getItem("contact"));
  // console.log(data);

  let date = new Date().getHours();
  // console.log(date);
  let dateMsg = "";

  if (date <= 12 && date >= 6) {
    dateMsg = "Good Morning!";
  } else if (date > 12 && date <= 17) {
    dateMsg = "Good Afternoon!";
  } else {
    dateMsg = "Good Evening!";
  }

  let name = !data ? "No data found" : data.name1;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand size-lg py-1" href="#">
          Kwitter
        </h1>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/Home" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
            </Link>

            <Link to="/profile" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </Link>

            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </Link>
            <li className="nav-item">
              <div className="text-light py-2 ps-5" href="#">
                Hello {name}, {dateMsg}
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/">
              <button className="btn btn-danger" type="submit">
                Logout
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
