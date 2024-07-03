import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    const [activeItem, setActiveItem] = useState("home");

    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand" href={route("home")}>
                        Car<span>Book</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className=" navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item ${
                                    activeItem === "home" ? "active" : ""
                                }`}
                            >
                                <Link
                                    href={route("home")}
                                    className="nav-link"
                                    onClick={() => setActiveItem("home")}
                                >
                                    Home
                                </Link>
                            </li>
                            <li
                                className={`nav-item ${
                                    activeItem === "pricing" ? "active" : ""
                                }`}
                            >
                                <Link
                                    href={route("pricing")}
                                    className="nav-link"
                                    onClick={() => setActiveItem("pricing")}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li
                                className={`nav-item ${
                                    activeItem === "cars" ? "active" : ""
                                }`}
                            >
                                <Link
                                    href={route("cars")}
                                    className="nav-link"
                                    onClick={() => setActiveItem("cars")}
                                >
                                    Cars
                                </Link>
                            </li>
                        </ul>
                        {auth.user ? (
                            <div className="nav-item dropdown">
                                <a
                                    className="nav-link btn btn-secondary dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Welcome, {auth.user.name} 
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="dropdown-item"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={route("login")}
                                className="btn btn-secondary py-2 ml-1"
                            >
                                Log in
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
