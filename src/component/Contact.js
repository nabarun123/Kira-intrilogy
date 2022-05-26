import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function getData(e) {
    e.preventDefault();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
      }}
    >
      <div style={{ width: 38 + "rem" }} className="bg-dark px-2 py-3">
        <h4 style={{ color: "white", textAlign: "center" }}>
          Share your thoughts
        </h4>
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
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control m-1"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              className="btn btn-primary form-control m-1 "
              value="Submit"
              onSubmit={getData}
            />
          </div>
        </form>
        <div className="text-light">{`You have entered "${name}"as your name and "${email}" as email. Your message is "${message}"`}</div>
      </div>
    </div>
  );
}

export default Contact;
