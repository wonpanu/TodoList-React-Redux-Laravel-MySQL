import React from "react";

export default function() {
    return (
        <div class="container">
            <div class="row">
                <div class="col" />
                <div
                    class="col-10"
                    style={{
                        margin: "8%"
                    }}
                >
                    <h1 style={{ fontWeight: "bold" }}>404 page not found</h1>
                    <p>
                        We are sorry but the page you are looking for does not
                        exist.
                    </p>
                    <a
                        href="/"
                        class="btn btn-primary btn-lg active"
                        role="button"
                        aria-pressed="true"
                    >
                        Back to Homepage
                    </a>
                </div>
                <div class="col" />
            </div>
        </div>
    );
}
