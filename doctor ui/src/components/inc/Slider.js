import React from "react";
import Slider1 from "../images/Slider1.jpg";
import Slider2 from "../images/Slider2.jpg";
import Slider3 from "../images/Slider3.jpg";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Slider1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5> Choose The Expert</h5>
            <p>Your home for health</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Slider2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Find Doctors Near You </h5>
            <p>You are in safe hands</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Slider3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Instant Video Call </h5>
            <p> we are here </p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
