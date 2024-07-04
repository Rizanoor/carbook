import HeroBreadcrumbs from "@/Components/molecules/HeroBreadcumbs";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Setting({ book }) {
    const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Settings" }];

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const calculateDaysBetween = (pickupDate, dropDate) => {
        const pickup = new Date(pickupDate);
        const drop = new Date(dropDate);
        const differenceInTime = drop - pickup;
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays;
    };

    const booking = book.map((item) => ({
        id: item.id,
        pickup_location: item.pickup_location,
        drop_location: item.drop_location,
        pickup_date: item.pickup_date,
        drop_date: item.drop_date,
        pickup_time: item.pickup_time,
        transaction_status: item.transaction_status,
        price: formatPrice(item.price),
        days_between: calculateDaysBetween(item.pickup_date, item.drop_date),
        product_name: item.product ? item.product.name : "-",
    }));

    return (
        <>
            <HomeLayout>
                <HeroBreadcrumbs breadcrumbs={breadcrumbs} title="Settings" />
                <section className="ftco-section ftco-car-details">
                    <div className="container">
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
                                                    List Booking
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
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Mobil</th>
                                                        <th>Lokasi Pickup</th>
                                                        <th>Tanggal Pickup</th>
                                                        <th>
                                                            Status Transaksi
                                                        </th>
                                                        <th>Jam Pickup</th>
                                                        <th>Total Harga</th>
                                                        <th>Lama Hari</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {booking.map(
                                                        (book, index) => (
                                                            <tr key={book.id}>
                                                                <td>
                                                                    {index + 1}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        book.product_name
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        book.pickup_location
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        book.pickup_date
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {book.transaction_status ===
                                                                    "pending" ? (
                                                                        <span className="badge badge-warning">
                                                                            Pending
                                                                        </span>
                                                                    ) : book.transaction_status ===
                                                                      "success" ? (
                                                                        <span className="badge badge-success">
                                                                            Success
                                                                        </span>
                                                                    ) : (
                                                                        <span className="badge badge-danger">
                                                                            Failed
                                                                        </span>
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        book.pickup_time
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {book.price}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        book.days_between
                                                                    }{" "}
                                                                    Days
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div
                                            className="tab-pane fade"
                                            id="pills-manufacturer"
                                            role="tabpanel"
                                            aria-labelledby="pills-manufacturer-tab"
                                        >
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
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
