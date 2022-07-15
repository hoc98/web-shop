import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Link } from "react-router-dom";
import { getSigninAction } from "./actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

 
const Signin = ({location,history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignins = useSelector((state)=>state.userSignin)
  const {loading,error,userInfo} = userSignins;
  
  console.log(email,password)

  useEffect(() => {
    if (userInfo){
     
    }
  }, [history,userInfo,])
  

  const submiHandler = (e) => {
    e.preventDefault();
    dispatch(getSigninAction(email, password ));
  };
  return (
    <>
    <div class="container-fluid ps-md-0">
      <div class="row g-0">
        <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div class="col-md-8 col-lg-6">
          <div class="login d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-8 mx-auto">
                  <h3 class="login-heading mb-4">Welcome back!</h3>

                  <form onSubmit={submiHandler}>
                   
                    
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="rememberPasswordCheck"
                      />
                      <label
                        class="form-check-label"
                        for="rememberPasswordCheck"
                      >
                        Remember password
                      </label>
                    </div>

                    <div class="d-grid">
                    <Link to={"/"}>
                      <button
                        class="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                        login
                      </button>
                      </Link>
                      <div class="text-center">
                        <Link to="/" class="small"    >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div class="d-grid">
                      <div>
                    <Link to={"/login"}>
                    <button 
                        class="btn btn-lg btn-warning btn-login text-uppercase fw-bold mb-2"
                        type="submit"
                      >
                       
                        singin
                        
                      </button>
                      </Link>
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Signin;