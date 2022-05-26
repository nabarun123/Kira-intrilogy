import React, { useState, useEffect } from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import { Suspense } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => err);
    console.log(data);
  }, []);

  return (
    <div className="userContainer">
      <h2 className="text-dark mt-5 text-center">User Page</h2>
      {/* <Suspense fallback={<h1 className="loader">Loading...</h1>}> */}
      <div>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          <div className="user">
            {data.map((item) => (
              <div
                className="card"
                style={{ width: 18 + "rem", marginBottom: "30px" }}
              >
                <img src={item.url} class="card-img-top" alt="img" />
                <div class="card-body">
                  <p class="card-text">{item.title}</p>
                  <Link to="/profile">
                    <a href="#" class="btn btn-success">
                      Go To Profile
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* </Suspense> */}
    </div>
  );
}

export default Users;
