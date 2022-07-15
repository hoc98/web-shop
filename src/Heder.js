import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const Heder = () => {
  const [showUser, setshowUser] = useState(false)
const {userInfo}= useSelector((state)=>state.userRegister)


console.log(userInfo)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <Link to="/" class="navbar-brand" >
            <img src="data:image/png;base64,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" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#!"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/" class="nav-link" href="#!">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  to="/"
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/" class="dropdown-item" href="#!">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item" href="#!">
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item" href="#!">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            
            
              <form class="d-flex">
              <Link to={("/carts") }  style={{ textDecoration:"none" }}
              
              >
                <button  class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">

                  </span>
                </button>
                </Link>
              </form>
            
            
              <form class="d-flex">
              <Link to="/login" style={{ textDecoration:"none" }} 
               >
                <button class="btn btn-outline-dark" type="submit">
                  <FontAwesomeIcon
                    className="user"
                    icon={faUser}
                  ></FontAwesomeIcon>
                  Login
                  <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
                </button>
                </Link>
              </form>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Heder;
// to={userInfo ?"/carts" : "/login?redirect=cart"}
