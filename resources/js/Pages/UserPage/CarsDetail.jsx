import React from "react";
import HeroBreadcrumbs from "@/Components/molecules/HeroBreadcumbs";
import HomeLayout from "@/Layouts/HomeLayout";
import FeaturesDetail from "@/Components/molecules/FeaturesDetail";

export default function CarsDetail({ product }) {
    const {
        name,
        category,
        time,
        transmission,
        photos,
        seats,
        fuel,
        long_description,
    } = product;

    const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Car Detail" }];

    return (
        <>
            <HomeLayout>
                <HeroBreadcrumbs breadcrumbs={breadcrumbs} title="Car Detail" />
                <section className="ftco-section ftco-car-details">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="car-details">
                                    <div
                                        className="img rounded"
                                        style={{
                                            backgroundImage: `url(/storage/${photos})`,
                                        }}
                                    ></div>
                                    <div className="text text-center">
                                        <span className="subheading">
                                            {category.name}
                                        </span>
                                        <h2>{name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="media-body py-md-4">
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-dashboard"></span>
                                            </div>
                                            <div className="text">
                                                <h3 className="heading mb-0 pl-3">
                                                    Mileage
                                                    <span>40,000</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="media-body py-md-4">
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-pistons"></span>
                                            </div>
                                            <div className="text">
                                                <h3 className="heading mb-0 pl-3">
                                                    Transmission
                                                    <span>{transmission}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="media-body py-md-4">
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-car-seat"></span>
                                            </div>
                                            <div className="text">
                                                <h3 className="heading mb-0 pl-3">
                                                    Seats
                                                    <span>{seats}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="media-body py-md-4">
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-backpack"></span>
                                            </div>
                                            <div className="text">
                                                <h3 className="heading mb-0 pl-3">
                                                    Luggage
                                                    <span>4 Bags</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md d-flex align-self-stretch">
                                <div className="media block-6 services">
                                    <div className="media-body py-md-4">
                                        <div className="d-flex mb-3 align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-diesel"></span>
                                            </div>
                                            <div className="text">
                                                <h3 className="heading mb-0 pl-3">
                                                    Fuel
                                                    <span>{fuel}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pills">
                                <div className="bd-example bd-example-tabs">
                                    <div className="d-flex justify-content-center">
                                        <ul
                                            className="nav nav-pills mb-3"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="pills-description-tab"
                                                    data-toggle="pill"
                                                    href="#pills-description"
                                                    role="tab"
                                                    aria-controls="pills-description"
                                                    aria-expanded="true"
                                                >
                                                    Features
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="pills-manufacturer-tab"
                                                    data-toggle="pill"
                                                    href="#pills-manufacturer"
                                                    role="tab"
                                                    aria-controls="pills-manufacturer"
                                                    aria-expanded="true"
                                                >
                                                    Description
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className="tab-content"
                                        id="pills-tabContent"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-description"
                                            role="tabpanel"
                                            aria-labelledby="pills-description-tab"
                                        >
                                            <FeaturesDetail />
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="pills-manufacturer"
                                            role="tabpanel"
                                            aria-labelledby="pills-manufacturer-tab"
                                        >
                                            {long_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
}
