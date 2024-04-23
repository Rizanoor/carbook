import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, category }) {
    const { data, setData, processing, errors, post } = useForm({
        ...category
    });

    const handleBack = () => {
        window.location.href = route('category');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('category.update', category.id));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category Edit
                </h2>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={onSubmit}>
                                <InputLabel
                                    htmlFor="name"
                                    value="Name"
                                    className="block text-gray-700 text-lg font-bold py-3"
                                />
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    t="primary-outline"
                                    placeholder="Enter the name of category"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name}
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
