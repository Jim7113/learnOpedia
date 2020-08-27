import React from "react";
import banner from "../../images/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light h6">
        <a className="navbar-brand ml-5" href="/home">
          LEARNOPEDIA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/categories">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/teach">
                Teach
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/account">
                My account
              </a>
            </li>
          </ul>
          <a className="nav-link ml-auto text-info" href="/cart">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: 25 }} />
          </a>
          <a className="nav-link mx-3  text-info" href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: 25 }} />
          </a>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            ></input>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container mb-5">
        <img src={banner} className="img-fluid" alt="banner"></img>
      </div>
    </div>
  );
}

export default Header;
