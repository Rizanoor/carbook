import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function ProductEdit({ auth, product }) {
    console.log("product", product);

    const { data, setData, processing, errors, post } = useForm({
        ...product,
    });

    const handleBack = () => {
        window.location.href = route("product");
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("product.update", product.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Edit
                </h2>
            }
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={onSubmit}>
                                <InputLabel
                                    htmlFor="name"
                                    value="name"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the name of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
                                    </p>
                                )}

                                <InputLabel
                                    htmlFor="transmission"
                                    value="Transmission"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="transmission"
                                    value={data.transmission}
                                    onChange={(e) =>
                                        setData("transmission", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the transmission of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.transmission && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.transmission}
                                    </p>
                                )}
                                <InputLabel
                                    htmlFor="seats"
                                    value="Seats"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />

                                <TextInput
                                    type="text"
                                    name="seats"
                                    value={data.seats}
                                    onChange={(e) =>
                                        setData("seats", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the seats of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.seats && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.seats}
                                    </p>
                                )}

                                <InputLabel
                                    htmlFor="fuel"
                                    value="Fuel"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="fuel"
                                    value={data.fuel}
                                    onChange={(e) =>
                                        setData("fuel", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the fuel of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.fuel && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.fuel}
                                    </p>
                                )}

                                <InputLabel
                                    htmlFor="price"
                                    value="Price"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the price of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.price && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.price}
                                    </p>
                                )}

                                <InputLabel
                                    htmlFor="time"
                                    value="Time"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="time"
                                    value={data.time}
                                    onChange={(e) =>
                                        setData("time", e.target.value)
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the time of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.time && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.time}
                                    </p>
                                )}

                                <InputLabel
                                    htmlFor="long_description"
                                    value="Description"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextArea
                                    type="text"
                                    name="long_description"
                                    value={data.long_description}
                                    onChange={(e) =>
                                        setData(
                                            "long_description",
                                            e.target.value
                                        )
                                    }
                                    variant="primary-outline"
                                    placeholder="Enter the long_description of product"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.long_description && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.long_description}
                                    </p>
                                )}

                                <SecondaryButton
                                    onClick={handleBack}
                                    className="my-4 me-4"
                                >
                                    Cancel
                                </SecondaryButton>
                                {!processing && (
                                    <PrimaryButton
                                        type="submit"
                                        className="my-4"
                                    >
                                        Save
                                    </PrimaryButton>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
