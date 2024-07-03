import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <Link className="navbar-brand" href={route('home')}>
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
                            <li className="nav-item active">
                                <Link href={route('home')} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="services.html" className="nav-link">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pricing.html" className="nav-link">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="car.html" className="nav-link">
                                    Cars
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
