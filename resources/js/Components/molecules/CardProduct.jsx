import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import ModalBook from "./ModalBook";

const CardProduct = ({ product }) => {
    const { auth } = usePage().props;

    const [modalOpen, setModalOpen] = useState(false);

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
        <>
            <div className="col-md-4">
                <div className="car-wrap rounded">
                    <div
                        className="img rounded d-flex align-items-end"
                        style={{ backgroundImage: `url(${product.imageUrl})` }}
                    ></div>
                    <div className="text">
                        <h2 className="mb-0">
                            <a href={`cars/${product.slug}`}>{product.name}</a>
                        </h2>
                        <div className="d-flex mb-3">
                            <span className="cat">{product.brand}</span>
                            <p className="price ml-auto">
                                {product.price} <span>/day</span>
                            </p>
                        </div>
                        <p className="d-flex mb-0 d-block">
                            <button
                                className="btn btn-primary py-2 mr-1"
                                onClick={openModal}
                            >
                                {auth.user ? "Book now" : "Login"}
                            </button>
                            <a
                                href={`cars/${product.slug}`}
                                className="btn btn-secondary py-2 ml-1"
                            >
                                Details
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {auth.user && (
                <ModalBook
                    isOpen={modalOpen}
                    onClose={closeModal}
                    products_id={product.id}
                    price={product.price}
                />
            )}
        </>
    );
};

export default CardProduct;
