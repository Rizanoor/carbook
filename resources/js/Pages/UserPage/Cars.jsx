import HeroBreadcrumbs from "@/Components/molecules/HeroBreadcumbs";
import HomeLayout from "@/Layouts/HomeLayout";
import gambar from "../../../../public/images/car-1.jpg";

export default function Cars() {
    const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Cars" }];

    return (
        <>
            <HomeLayout>
                <HeroBreadcrumbs breadcrumbs={breadcrumbs} title="Cars" />
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="car-wrap rounded">
                                    <div
                                        className="img rounded d-flex align-items-end"
                                        style={{
                                            backgroundImage: `url(${gambar})`,
                                        }}
                                    ></div>
                                    <div className="text">
                                        <h2 className="mb-0">
                                            <a href="car-single.html">
                                                Mercedes Grand Sedan
                                            </a>
                                        </h2>
                                        <div className="d-flex mb-3">
                                            <span className="cat">
                                                Cheverolet
                                            </span>
                                            <p className="price ml-auto">
                                                $500 <span>/day</span>
                                            </p>
                                        </div>
                                        <p className="d-flex mb-0 d-block">
                                            <a
                                                href="#"
                                                className="btn btn-primary py-2 mr-1"
                                            >
                                                Book now
                                            </a>{" "}
                                            <a
                                                href="car-single.html"
                                                className="btn btn-secondary py-2 ml-1"
                                            >
                                                Details
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="car-wrap rounded">
                                    <div
                                        className="img rounded d-flex align-items-end"
                                        style={{
                                            backgroundImage: `url(${gambar})`,
                                        }}
                                    ></div>
                                    <div className="text">
                                        <h2 className="mb-0">
                                            <a href="car-single.html">
                                                Range Rover
                                            </a>
                                        </h2>
                                        <div className="d-flex mb-3">
                                            <span className="cat">Subaru</span>
                                            <p className="price ml-auto">
                                                $500 <span>/day</span>
                                            </p>
                                        </div>
                                        <p className="d-flex mb-0 d-block">
                                            <a
                                                href="#"
                                                className="btn btn-primary py-2 mr-1"
                                            >
                                                Book now
                                            </a>{" "}
                                            <a
                                                href="car-single.html"
                                                className="btn btn-secondary py-2 ml-1"
                                            >
                                                Details
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="car-wrap rounded">
                                    <div
                                        className="img rounded d-flex align-items-end"
                                        style={{
                                            backgroundImage: `url(${gambar})`,
                                        }}
                                    ></div>
                                    <div className="text">
                                        <h2 className="mb-0">
                                            <a href="car-single.html">
                                                Mercedes Grand Sedan
                                            </a>
                                        </h2>
                                        <div className="d-flex mb-3">
                                            <span className="cat">
                                                Cheverolet
                                            </span>
                                            <p className="price ml-auto">
                                                $500 <span>/day</span>
                                            </p>
                                        </div>
                                        <p className="d-flex mb-0 d-block">
                                            <a
                                                href="#"
                                                className="btn btn-primary py-2 mr-1"
                                            >
                                                Book now
                                            </a>{" "}
                                            <a
                                                href="car-single.html"
                                                className="btn btn-secondary py-2 ml-1"
                                            >
                                                Details
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li>
                                            <a href="#">&lt;</a>
                                        </li>
                                        <li className="active">
                                            <span>1</span>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">5</a>
                                        </li>
                                        <li>
                                            <a href="#">&gt;</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
}
