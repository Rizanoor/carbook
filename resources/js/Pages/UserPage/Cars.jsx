import HeroBreadcrumbs from "@/Components/molecules/HeroBreadcumbs";
import HomeLayout from "@/Layouts/HomeLayout";
import CardProduct from "@/Components/molecules/CardProduct";

export default function Cars({ product }) {
    const breadcrumbs = [{ label: "Home", link: "/" }, { label: "Cars" }];

    return (
        <>
            <HomeLayout>
                <HeroBreadcrumbs breadcrumbs={breadcrumbs} title="Cars" />
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row">
                            {product.map((item) => (
                                <CardProduct
                                    key={item.id}
                                    image={`/storage/${item.photos}`}
                                    name={item.name}
                                    brand={item.category.name}
                                    price={new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(item.price)}
                                    detailsUrl={`cars/${item.slug}`}
                                    bookUrl="#"
                                />
                            ))}
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li>
                                            <a href="#">&lt;</a>
                                        </li>
                                        <li className="active">
                                            <span>1</span>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">5</a>
                                        </li>
                                        <li>
                                            <a href="#">&gt;</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </HomeLayout>
        </>
    );
}
