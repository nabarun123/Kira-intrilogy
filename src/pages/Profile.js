import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import "../pages/Profile.css";

function Profile() {
  return (
    <div>
      <Header />
      <h2 className="text-primary mt-5 text-center">Profile Page</h2>

      <Footer />
    </div>
  );
}

export default Profile;
