import gambar from "../../../../public/images/bg_3.jpg";

export default function BecomeDriver() {
    return (
        <>
            <section
                className="ftco-section ftco-intro"
                style={{backgroundImage: `url(${gambar})`}}

            >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-6 heading-section heading-section-white">
                            <h2 className="mb-3">
                                Do You Want To Earn With Us? So Don't Be Late.
                            </h2>
                            <a href="#" className="btn btn-primary btn-lg">
                                Become A Driver
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
