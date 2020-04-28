import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function LoginPage() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
        waiting: false,
        auth: false
    });
    console.log("login: ", values);

    const handleChange = prop => event => {
        setValues({
            ...values,
            [prop]:
                prop === "remember" ? event.target.checked : event.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const request = values.email && values.password && true;

        if (request) {
            setValues({ ...values, waiting: true });
            axios
                .post("/api/login", {
                    email: values.email,
                    password: values.password
                })
                .then(res => {
                    values.remember
                        ? localStorage.setItem(
                              "access_token",
                              res.data.access_token
                          )
                        : sessionStorage.setItem(
                              "access_token",
                              res.data.access_token
                          );
                    dispatch({ type: "SIGNIN" });
                    setValues({
                        ...values,
                        email: "",
                        password: "",
                        waiting: false,
                        auth: true
                    });
                })
                .catch(err => {
                    alert(
                        "Your email or password was incorrect, please try again."
                    );
                    setValues({ ...values, waiting: false });
                });
        }
    };

    return (
        <div
            class="jumbotron-fluid"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center"
            }}
        >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card ">
                            <div class="card-body" style={{ margin: "5vh" }}>
                                <h1 class="card-title text-center">Welcome</h1>
                                <br />
                                <form
                                    class="form-signin"
                                    onSubmit={handleSubmit}
                                >
                                    <div class="form-label-group">
                                        <label
                                            for="inputEmail "
                                            style={{ fontWeight: "bolder" }}
                                        >
                                            Email address
                                        </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <svg
                                                        class="bi bi-envelope"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                                                            clip-rule="evenodd"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                                                            clip-rule="evenodd"
                                                        />
                                                        <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="email"
                                                id="inputEmail"
                                                class="form-control"
                                                placeholder="Email address"
                                                required
                                                autofocus
                                                value={values.email}
                                                onChange={handleChange("email")}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-label-group">
                                        <label
                                            for="inputPassword"
                                            style={{ fontWeight: "bolder" }}
                                        >
                                            Password
                                        </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <svg
                                                        class="bi bi-lock"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="password"
                                                id="inputPassword"
                                                class="form-control"
                                                placeholder="Password"
                                                required
                                                value={values.password}
                                                onChange={handleChange(
                                                    "password"
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input
                                            type="checkbox"
                                            class="custom-control-input"
                                            id="customCheck1"
                                            checked={values.remember}
                                            onChange={handleChange("remember")}
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="customCheck1"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="form-label-group">
                                        <button className="btn btn-primary">
                                            Sign in
                                            {values.waiting && (
                                                <div
                                                    class="spinner-border spinner-border-sm"
                                                    role="status"
                                                    style={{
                                                        marginLeft: "2vh"
                                                    }}
                                                >
                                                    <span class="sr-only">
                                                        Loading...
                                                    </span>
                                                </div>
                                            )}
                                            {values.auth && (
                                                <Redirect to="/todolist" />
                                            )}
                                        </button>
                                        <span style={{ marginLeft: "2vh" }}>
                                            No account?
                                        </span>
                                        <Link
                                            to="/signup"
                                            className="btn btn-link"
                                        >
                                            Create one!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
