import { useForm } from "@inertiajs/react";

export default function ModalBook({ isOpen, onClose, products_id }) {
    const { data, setData, post, reset } = useForm({
        products_id: products_id,
        pickup_location: '',
        drop_location: '',
        pickup_date: '',
        drop_date: '',
        pickup_time: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/booking/store', {
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

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
                                    onSubmit={handleSubmit}
                                    className="request-form bg-primary"
                                >
                                    <h2>Make your trip</h2>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Pick-up location
                                        </label>
                                        <input
                                            type="text"
                                            name="pickup_location"
                                            className="form-control"
                                            placeholder="City, Airport, Station, etc"
                                            value={data.pickup_location}
                                            onChange={e => setData('pickup_location', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Drop-off location
                                        </label>
                                        <input
                                            type="text"
                                            name="drop_location"
                                            className="form-control"
                                            placeholder="City, Airport, Station, etc"
                                            value={data.drop_location}
                                            onChange={e => setData('drop_location', e.target.value)}
                                            required
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
                                                id="pickup_date"
                                                name="pickup_date"
                                                placeholder="Date"
                                                value={data.pickup_date}
                                                onChange={e => setData('pickup_date', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group ml-2">
                                            <label htmlFor="" className="label">
                                                Drop-off date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="drop_date"
                                                name="drop_date"
                                                placeholder="Date"
                                                value={data.drop_date}
                                                onChange={e => setData('drop_date', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="" className="label">
                                            Pick-up time
                                        </label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="pickup_time"
                                            name="pickup_time"
                                            placeholder="Time"
                                            value={data.pickup_time}
                                            onChange={e => setData('pickup_time', e.target.value)}
                                            required
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
