import React from "react";

const Testimonials = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="4000"
      style={{ maxWidth: "800px", margin: "50px auto" }}
    >
      {/* Dots */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              “Swipe Savvy helped us increase repeat customers by 40%! Super
              easy to use.”
            </p>
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#555",
              }}
            >
              — Sarah, Café Owner
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              “Love the free signage and rewards setup. Took minutes to get
              started!”
            </p>
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#555",
              }}
            >
              — Ahmed, Retailer
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              “Customers now recognize our loyalty program thanks to Swipe
              Savvy.”
            </p>
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#555",
              }}
            >
              — Julia, Salon Owner
            </h5>
          </div>
        </div>

        <div className="carousel-item">
          <div
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              “Great support team and very intuitive interface. Highly
              recommend!”
            </p>
            <h5
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#555",
              }}
            >
              — Michael, Bookstore
            </h5>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimonialCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Testimonials;
