import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [values, setValues] = useState({
        fullName: "",
        email: "",
        password: "",
        waiting: false
    });
    console.log("Input: ", values);

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const request = values.fullName && values.email && values.password;
        if (request) {
            setValues({ ...values, waiting: true });
            axios
                .post("/api/signup", {
                    firstName: values.fullName.split(" ")[0],
                    lastName: values.fullName.split(" ")[1],
                    email: values.email,
                    password: values.password
                })
                .then(res => {
                    console.log(res);
                    setValues({
                        fullName: "",
                        email: "",
                        password: "",
                        waiting: false
                    });
                })
                .catch(err => {
                    alert(err);
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
                                <h1 class="card-title">Create Account</h1>
                                <br />
                                <form
                                    name="form-signup"
                                    onSubmit={handleSubmit}
                                >
                                    <div class="form-label-group">
                                        <label
                                            for="inputFullName"
                                            style={{ fontWeight: "bolder" }}
                                        >
                                            Full Name
                                        </label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <svg
                                                        class="bi bi-person"
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 16 16"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                id="inputFullName"
                                                class="form-control"
                                                placeholder="Full name"
                                                required
                                                value={values.fullName}
                                                onChange={handleChange(
                                                    "fullName"
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <br />
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
                                        <small
                                            id="passwordHelpBlock"
                                            class="form-text text-muted"
                                        >
                                            Your password must be 8-20
                                            characters long, contain letters and
                                            numbers, and must not contain
                                            spaces, special characters, or
                                            emoji.
                                        </small>
                                    </div>
                                    <br />
                                    <div className="form-label-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Sign up
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
                                        </button>
                                        <Link
                                            to="/signin"
                                            className="btn btn-link"
                                        >
                                            Cancel
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
