import HeroBreadcumbs from "@/Components/molecules/HeroBreadcumbs";
import PricingList from "@/Components/organisems/PricingList";
import HomeLayout from "@/Layouts/HomeLayout";
import React from "react";

export default function Pricing() {
    const breadcrumbs = [
        { label: "Home", link: "/" },
        { label: "Pricing", link: "#" },
    ];

    return (
        <>
            <HomeLayout>
                <HeroBreadcumbs
                    breadcrumbs={breadcrumbs}
                    title="Pricing"
                />{" "}
                <PricingList />
            </HomeLayout>
        </>
    );
}
