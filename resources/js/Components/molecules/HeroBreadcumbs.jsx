import gambar from "../../../../public/images/bg_3.jpg";

const HeroBreadcrumbs = ({ breadcrumbs, title }) => {
    return (
        <section
            className="hero-wrap hero-wrap-2 js-fullheight"
            style={{ backgroundImage: `url(${gambar})` }}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                    <div className="col-md-9 pb-5">
                        <p className="breadcrumbs">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <span key={index} className="mr-2">
                                    <a href={breadcrumb.link}>
                                        {breadcrumb.label}{" "}
                                        <i className="ion-ios-arrow-forward"></i>
                                    </a>
                                </span>
                            ))}
                        </p>
                        <h1 className="mb-3 bread">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBreadcrumbs;
