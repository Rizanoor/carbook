import BecomeDriver from "@/Components/molecules/BecomeDriver";
import Hero from "@/Components/molecules/Hero";
import MakeYourTrip from "@/Components/molecules/MakeYourTrip";
import Service from "@/Components/molecules/Service";
import Welcome from "@/Components/molecules/Welcome";
import Blog from "@/Components/organisems/Blog";
import FeatureVehicle from "@/Components/organisems/FeatureVehicle";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Home({ product }) {
    console.log(product);
    const images = product.map((item) => `/storage/${item.photos}`);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(price);
    };

    const vehicleData = product.map((item) => ({
        id: item.id,
        name: item.name,
        brand: item.category.name,
        time: item.time,
        price: formatPrice(item.price),
        slug: item.slug,
    }));

    return (
        <>
            <HomeLayout>
                <Hero />
                <MakeYourTrip />
                <FeatureVehicle images={images} vehicleData={vehicleData} />
                <Welcome />
                <Service />
                <BecomeDriver />
                <Blog />
            </HomeLayout>
        </>
    );
}
