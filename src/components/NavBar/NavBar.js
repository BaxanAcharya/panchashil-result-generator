import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  my-nav">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" && "active myactive"
                  } `}
                  aria-current="page"
                >
                  JKGA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/one"
                  className={`nav-link ${
                    location.pathname === "/one" && "active myactive"
                  } `}
                >
                  One
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/nurserya"
                  className={`nav-link ${
                    location.pathname === "/nurserya" && "active myactive"
                  } `}
                >
                  Nursery A
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/playnursery"
                  className={`nav-link ${
                    location.pathname === "/playnursery" && "active myactive"
                  } `}
                >
                  Play Nursery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="kg"
                  className={`nav-link ${
                    location.pathname === "/kg" && "active myactive"
                  } `}
                >
                  KG
                </Link>
              </li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/BaxanAcharya/panchashil-result-generator/blob/main/src/assets/excel/sample.xlsx?raw=true"
                  className="nav-link"
                >
                  Download Sample
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </>
  );
};

export default NavBar;
