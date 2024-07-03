import React, { useState } from "react";
import "./css/carousel.css";
import ModalBook from "../molecules/ModalBook";
import { usePage } from "@inertiajs/react";

const FeatureVehicle = ({ images, vehicleData }) => {
    const { auth } = usePage().props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const prevSlide = () => {
        const newIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentVehicle = vehicleData[currentIndex];

    const openModal = () => {
        if (auth.user) {
            setModalOpen(true);
        } else {
            alert("Please login to book this vehicle.");
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="ftco-section ftco-no-pt bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 heading-section text-center mb-5">
                        <span className="subheading">What we offer</span>
                        <h2 className="mb-2">Featured Vehicles</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="carousel-container">
                            <button
                                className="carousel-button prev"
                                onClick={prevSlide}
                            >
                                &#10094;
                            </button>
                            <div className="carousel-slide">
                                <div
                                    className="car-wrap rounded"
                                    style={{
                                        backgroundImage: `url(${images[currentIndex]})`,
                                    }}
                                >
                                    <div className="text-carousel">
                                        <h2 className="mb-0">
                                            <b>
                                                <a href="#">
                                                    {currentVehicle.name}
                                                </a>
                                            </b>
                                        </h2>
                                        <div className="d-flex mb-3">
                                            <span className="cat">
                                                {currentVehicle.brand} &nbsp;
                                            </span>
                                            <p className="price ml-auto">
                                                {currentVehicle.price}
                                                <span>
                                                    /{currentVehicle.time}
                                                </span>
                                            </p>
                                        </div>
                                        <p className="d-flex mb-0 d-block">
                                            <button
                                                className="btn btn-primary py-2 mr-1"
                                                onClick={openModal}
                                            >
                                                {auth.user
                                                    ? "Book now"
                                                    : "Login"}
                                            </button>
                                            <a
                                                href={`cars/${currentVehicle.slug}`}
                                                className="btn btn-secondary py-2 ml-1"
                                            >
                                                Details
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-button next"
                                onClick={nextSlide}
                            >
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {auth.user && (
                <ModalBook
                    isOpen={modalOpen}
                    onClose={closeModal}
                    products_id={currentVehicle.id}
                />
            )}
        </section>
    );
};

export default FeatureVehicle;
