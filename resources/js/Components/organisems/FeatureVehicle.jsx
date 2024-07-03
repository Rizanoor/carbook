import React, { useState } from 'react';
import gambar from "../../../../public/images/car-1.jpg";
import gambar2 from "../../../../public/images/car-2.jpg";
import gambar3 from "../../../../public/images/car-3.jpg";
import gambar4 from "../../../../public/images/car-4.jpg";
import "./css/carousel.css"

const images = [gambar, gambar2, gambar3, gambar4];

export default function FeatureVehicle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="ftco-section ftco-no-pt bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">What we offer</span>
            <h2 className="mb-2">Featured Vehicles</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel-container">
              <button className="carousel-button prev" onClick={prevSlide}>
                &#10094;
              </button>
              <div className="carousel-slide">
                <div
                  className="car-wrap rounded"
                  style={{ backgroundImage: `url(${images[currentIndex]})` }}
                >
                  <div className="text-carousel">
                    <h2 className="mb-0">
                      <a href="#">Mercedes Grand Sedan</a>
                    </h2>
                    <div className="d-flex mb-3">
                      <span className="cat">Cheverolet</span>
                      <p className="price ml-auto">
                        $500 <span>/day</span>
                      </p>
                    </div>
                    <p className="d-flex mb-0 d-block">
                      <a href="#" className="btn btn-primary py-2 mr-1">
                        Book now
                      </a>
                      <a href="#" className="btn btn-secondary py-2 ml-1">
                        Details
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <button className="carousel-button next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
