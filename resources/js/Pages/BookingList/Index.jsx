import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import moment from "moment/moment";
import { router } from "@inertiajs/react";

export default function BookingListIndex({ auth, booking }) {
    console.log(booking);
    return (
        <AuthenticatedLayout
            user={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Booking List
                </h2>
            }
        >
            <Head title="Booking List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-6 text-gray-900 overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            No
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Mobil
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Nama Pemesan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tanggal Pemesan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status Transaksi
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Tanggal Penjemputan
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Lokasi Penjemputan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {booking.map((booking, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-100"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {booking.product
                                                    ? booking.product.name
                                                    : "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {booking.user
                                                    ? booking.user.name
                                                    : "-"}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {moment(
                                                    booking.created_at
                                                ).format("DD MMM YYYY")}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {booking.transaction_status ===
                                                "pending" ? (
                                                    <span className="badge badge-warning">
                                                        Pending
                                                    </span>
                                                ) : booking.transaction_status ===
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
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {booking.pickup_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <a
                                                    href={
                                                        booking.pickup_location
                                                    }
                                                    target="_blank"
                                                    className="badge badge-primary"
                                                >
                                                    Lihat Lokasi
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
