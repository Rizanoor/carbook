import React from 'react';

export default function CardProduct({ image, name, brand, price, detailsUrl, onBook }) {
  return (
    <div className="col-md-4">
      <div className="car-wrap rounded">
        <div
          className="img rounded d-flex align-items-end"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text">
          <h2 className="mb-0">
            <a href={detailsUrl}>{name}</a>
          </h2>
          <div className="d-flex mb-3">
            <span className="cat">{brand}</span>
            <p className="price ml-auto">
              {price} <span>/day</span>
            </p>
          </div>
          <p className="d-flex mb-0 d-block">
            <button onClick={onBook} className="btn btn-primary py-2 mr-1">
              Book now
            </button>
            <a href={detailsUrl} className="btn btn-secondary py-2 ml-1">
              Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
