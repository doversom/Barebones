import "./App.css";
import Language from "./Language";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Title from "./Pages/Title";
import Logo from "./logo.png";
import { useState, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
export default function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const paths = window.location.pathname.split("/");
    if (paths.length > 1 && paths[1] == "title") setPage(1);
    else if (paths.length > 1 && paths[1] == "profile") setPage(2);
  }, []);

  return (
    <>
      <Router>
        <div className="top-bar">
          <div>{/* <img src={Logo} id="logo-top-bar" /> */}</div>
          <div
            className={
              page == 0
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
            onClick={() => {
              setPage(0);
            }}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={
              page == 1
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
            onClick={() => {
              setPage(1);
            }}
          >
            <Link to="/title">Title</Link>
          </div>
          <div
            className={
              page == 2
                ? "top-bar-page-selected notranslate"
                : "top-bar-page notranslate"
            }
            onClick={() => {
              setPage(2);
            }}
          >
            <Link to="/profile">Profile</Link>
          </div>
          <div id="lang-container">
            <IoLanguage className="lang-icon" color="#004277" />
            <Language />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/title" element={<Title />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
