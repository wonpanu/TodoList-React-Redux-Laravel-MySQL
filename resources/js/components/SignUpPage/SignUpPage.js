import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div class="container-fluid">
            <div class="row">
                <div
                    class="col-sm-9 col-md-7 col-lg-5 mx-auto"
                    style={{ marginTop: "4%" }}
                >
                    <div class="card">
                        <div
                            class="card-body"
                            style={{ width: "90%", margin: "5%" }}
                        >
                            <h1 class="card-title">Sign Up</h1>
                            <br />
                            <form name="form-signup">
                                <div class="form-label-group">
                                    <label
                                        for="inputFirstName"
                                        style={{ fontWeight: "bolder" }}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="inputFirstName"
                                        class="form-control"
                                        placeholder="First name"
                                        required
                                    />
                                </div>
                                <br />
                                <div class="form-label-group">
                                    <label
                                        for="inputLastName"
                                        style={{ fontWeight: "bolder" }}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="inputLastName"
                                        class="form-control"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                                <br />
                                <div class="form-label-group">
                                    <label
                                        for="inputEmail "
                                        style={{ fontWeight: "bolder" }}
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="inputEmail"
                                        class="form-control"
                                        placeholder="Email address"
                                        required
                                        autofocus
                                    />
                                </div>
                                <br />
                                <div class="form-label-group">
                                    <label
                                        for="inputPassword"
                                        style={{ fontWeight: "bolder" }}
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="inputPassword"
                                        class="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                    <small
                                        id="passwordHelpBlock"
                                        class="form-text text-muted"
                                    >
                                        Your password must be 8-20 characters
                                        long, contain letters and numbers, and
                                        must not contain spaces, special
                                        characters, or emoji.
                                    </small>
                                </div>
                                <br />
                                <div className="form-label-group">
                                    <button className="btn btn-primary">
                                        Sign up
                                    </button>
                                    <Link to="/signin" className="btn btn-link">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
