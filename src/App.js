import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          exact
          path="/contactus"
          element={
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <ContactUs />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
