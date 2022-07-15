import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRegisterAction } from "./actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = ({  history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const userRegisters = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegisters;

  console.log(email, name, password);

  useEffect(() => {
    if (userInfo) {
      history.push();
    }
  }, [history, userInfo]);

  const submiHandler = (e) => {
    e.preventDefault();
    dispatch(getRegisterAction(email, password, name));
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
                          onChange={(e) => setName(e.target.value)}
                          type="name"
                          class="form-control"
                          id="floatingname"
                          placeholder="name"
                        />
                        <label for="floatingInput">Name</label>
                      </div>
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
                          Sign in
                        </button>
                        </Link>

                        <div class="text-center">
                          <Link to="/" class="small" href="#">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                      <div class="d-grid">
                        <div>
                          have an account?{""}
                          <Link to={"/signin"}>
                            <button
                              class="btn btn-lg btn-warning btn-login text-uppercase fw-bold mb-2"
                              type="submit"
                            >
                              login
                            </button>
                          </Link>
                        </div>
                        <button
                          onClick={() => naviget(-1)}
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Back to page
                        </button>
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

export default Login;
