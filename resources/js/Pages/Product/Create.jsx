import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

export default function ProductCreate({ auth }) {
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
                            <form action="">
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
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    // onChange={(e) => setData('name', e.target.value)}
                                    // value={data.name}
                                />
                                {/* {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
