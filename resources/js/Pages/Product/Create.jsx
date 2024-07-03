import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ProductCreate({ auth, category }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        categories_id: "",
        transmission: "",
        seats: "",
        fuel: "",
        price: "",
        time: "",
        photos: null,
        long_description: "",
    });

    const handleBack = () => {
        window.location.href = route('product.index');
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("product.store"), {
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Create
                </h2>
            }
        >
            <Head title="Product Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} encType="multipart/form-data">
                                <InputLabel
                                    htmlFor="name"
                                    value="Name"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="name"
                                    variant="primary-outline"
                                    placeholder="Enter the name of categories"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('name', e.target.value)}
                                    value={data.name}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}

                                <InputLabel
                                    htmlFor="categories_id"
                                    value="Categories"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                
                                <select
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="categories_id"
                                    value={data.categories_id} 
                                    onChange={(e) => setData('categories_id', e.target.value)}
                                >
                                    <option value="">Choose category</option>
                                    {category.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>

                                {errors.categories_id && (
                                    <p className="text-red-500 text-sm mt-1">{errors.categories_id}</p>
                                )}

                                <InputLabel
                                    htmlFor="transmission"
                                    value="Transmission"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="transmission"
                                    variant="primary-outline"
                                    placeholder="Enter the name of transmission"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('transmission', e.target.value)}
                                    value={data.transmission}
                                />
                                {errors.transmission && (
                                    <p className="text-red-500 text-sm mt-1">{errors.transmission}</p>
                                )}

                                <InputLabel
                                    htmlFor="seats"
                                    value="Seats"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="seats"
                                    variant="primary-outline"
                                    placeholder="Enter the name of seats"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('seats', e.target.value)}
                                    value={data.seats}
                                />
                                {errors.seats && (
                                    <p className="text-red-500 text-sm mt-1">{errors.seats}</p>
                                )}

                                <InputLabel
                                    htmlFor="fuel"
                                    value="Fuel"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="fuel"
                                    variant="primary-outline"
                                    placeholder="Enter the name of fuel"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('fuel', e.target.value)}
                                    value={data.fuel}
                                />
                                {errors.fuel && (
                                    <p className="text-red-500 text-sm mt-1">{errors.fuel}</p>
                                )}

                                <InputLabel
                                    htmlFor="price"
                                    value="Price"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="price"
                                    variant="primary-outline"
                                    placeholder="Enter the name of price"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('price', e.target.value)}
                                    value={data.price}
                                />
                                {errors.price && (
                                    <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                                )}
                              
                                <InputLabel
                                    htmlFor="time"
                                    value="Time"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="time"
                                    variant="primary-outline"
                                    placeholder="Enter the name of time"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('time', e.target.value)}
                                    value={data.time}
                                />
                                {errors.time && (
                                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                                )}

                                <InputLabel
                                    htmlFor="photos"
                                    value="Photos"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <input 
                                    type="file"
                                    id="photos" 
                                    name="photos"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('photos', e.target.files[0])}
                                />
                                {errors.photos && (
                                    <p className="text-red-500 text-sm mt-1">{errors.photos}</p>
                                )}

                                <InputLabel
                                    htmlFor="long_description"
                                    value="Description"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextArea
                                    type="text"
                                    name="long_description"
                                    variant="primary-outline"
                                    placeholder="Enter the name of description"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e) => setData('long_description', e.target.value)}
                                    value={data.long_description}
                                />
                                {errors.long_description && (
                                    <p className="text-red-500 text-sm mt-1">{errors.long_description}</p>
                                )}
                                
                                <div className="flex items-center justify-between">
                                    <SecondaryButton onClick={handleBack} className="my-4">
                                        Cancel
                                    </SecondaryButton>
                                    {!processing && (
                                        <PrimaryButton type="submit" className="my-4">
                                            Save
                                        </PrimaryButton>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
