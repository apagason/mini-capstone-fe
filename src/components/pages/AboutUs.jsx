import React from "react";
import { bestSelling, onSale, topRated } from "../../utilities/enum";

export default function AboutUs() {
  const renderTopRated = () => {
    return topRated.map((item) => (
      <div
        className="d-flex align-items-start justify-content-start"
        key={item.id}
      >
        <img
          src={item.image}
          alt="top-rated-1"
          className="img-fluid w-25 pe-3"
        />
        <div className="description">
          <p className="mb-0">{item.title}</p>
          <span>{item.price}</span>
        </div>
      </div>
    ));
  };

  const renderBestSelling = () => {
    return bestSelling.map((item) => (
      <div
        className="d-flex align-items-start justify-content-start"
        key={item.id}
      >
        <img
          src={item.image}
          alt="best-selling-1"
          className="img-fluid w-25 pe-3"
        />
        <div className="description">
          <p className="mb-0">{item.title}</p>
          <span>{item.price}</span>
        </div>
      </div>
    ));
  };

  const renderOnSale = () => {
    return onSale.map((item) => (
      <div
        className="d-flex align-items-start justify-content-start"
        key={item.id}
      >
        <img src={item.image} alt="on-sale-1" className="img-fluid w-25 pe-3" />
        <div className="description">
          <p className="mb-0">{item.title}</p>
          <span>{item.price}</span>
        </div>
      </div>
    ));
  };
  return (
    <>
      <section id="aboutus" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-1 order-lg-1">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block">About Us</h2>
              </div>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ab nulla suscipit minus cumque facere reiciendis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
                dicta qui officiis nam sequi, veritatis labore repellat itaque
                numquam, est odit provident laborum soluta inventore quasi ex
                repudiandae? Odit?
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img
                src="images/about_us.jpg"
                alt="about-us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="popular" className="py-5">
        <div className="container">
          <div className="title pt-3 pb-5">
            <h2 className="position-relative d-inline-block">
              Popular of This Year
            </h2>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 g-3 row">
              <h3 className="fs-5">Top Rated</h3>
              {renderTopRated()}
            </div>

            <div className="col-md-6 col-lg-4 g-3 row">
              <h3 className="fs-5">Best Selling</h3>
              {renderBestSelling()}
            </div>

            <div className="col-md-6 col-lg-4 g-3 row">
              <h3 className="fs-5">On Sale</h3>
              {renderOnSale()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
