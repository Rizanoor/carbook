import React from "react";
import { usePage } from "@inertiajs/react";
import HeroBreadcrumbs from "@/Components/molecules/HeroBreadcumbs";
import HomeLayout from "@/Layouts/HomeLayout";
import CardProduct from "@/Components/molecules/CardProduct";

export default function Cars({ products }) {
    const { flash } = usePage().props;
    const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Cars" }];

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const vehicleData = products.map((item) => ({
        id: item.id,
        name: item.name,
        brand: item.category.name,
        time: item.time,
        price: formatPrice(item.price),
        slug: item.slug,
        imageUrl: `/storage/${item.photos}`,
    }));

    return (
        <HomeLayout>
            <HeroBreadcrumbs breadcrumbs={breadcrumbs} title="Cars" />
            {flash.message && (
                <div className={`alert alert-${flash.type}`}>
                    {flash.message}
                </div>
            )}
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        {vehicleData.map((product) => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
