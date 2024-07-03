import React from "react";

export default function ModalBook({ isOpen, onClose }) {
    return (
        <>
            <div
                className={`modal ${isOpen ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{ display: isOpen ? "block" : "none" }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Booking Confirmation
                            </h5>
                            <button
                                type="button"
                                className="close"
                                onClick={onClose}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12 align-items-center">
                                <form
                                    action="#"
                                    className="request-form bg-primary"
                                >
                                    <h2>Make your trip</h2>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Pick-up location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City, Airport, Station, etc"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Drop-off location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City, Airport, Station, etc"
                                        />
                                    </div>
                                    <div className="d-flex">
                                        <div className="form-group mr-2">
                                            <label htmlFor="" className="label">
                                                Pick-up date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="book_pick_date"
                                                placeholder="Date"
                                            />
                                        </div>
                                        <div className="form-group ml-2">
                                            <label htmlFor="" className="label">
                                                Drop-off date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="book_off_date"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Pick-up time
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="time_pick"
                                            placeholder="Time"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Rent A Car Now"
                                            className="btn btn-secondary py-3 px-4"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
