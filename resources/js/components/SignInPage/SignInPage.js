import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div
                    class="col-sm-9 col-md-7 col-lg-5 mx-auto"
                    style={{ marginTop: "10%" }}
                >
                    <div class="card">
                        <div
                            class="card-body"
                            style={{ width: "90%", margin: "5%" }}
                        >
                            <h1 class="card-title text-center">Sign in</h1>
                            <br />
                            <form class="form-signin">
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
                                </div>
                                <br />
                                <div class="custom-control custom-checkbox mb-3">
                                    <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="customCheck1"
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
                                    </button>
                                    <Link to="/signup" className="btn btn-link">
                                        Sign up
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
