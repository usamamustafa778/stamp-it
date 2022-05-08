import React from "react";

function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="w-100">
            <img className="h-100" src="/images/start.png" alt="First slide" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-100">
            <img className="h-100" src="/images/iPhone-Screen2.png" alt="First slide" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="w-100">
            <img className="h-100" src="/images/iPhone-Screen3.png" alt="First slide" />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Slider;
