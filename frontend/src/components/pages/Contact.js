import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row hero-section">
        <div className="col-md-6 dspl-items">
          <div className="text-center">
            <img
              src="/images/ownit.png"
              style={{ width: "4rem" }}
              alt="ownit_logo"
            />
            <h3 className="fw-bold">Contact Us</h3>
          </div>
          <h4 className="fw-bold pt-3">Customer Service</h4>
          <p className="fw-bold">
            Our customer service is available 24/7, Monday through Friday. Any
            reports or deliveries over the weekends are attended to first thing
            Monday morning.
            <br />
            <br />
            We can help answer any questions on our products, ranging from size
            guides, availability status on specific products, delivery status
            and due dates, shipping, return policies, and even customer refunds.
            So we encourage you to always keep adequate documentation of your
            payments and receipts.
          </p>
          <h4 className="fw-bold">E-mail Us</h4>
          <p className="fw-bold">
            Contact us via E-mail and be sure to receive a response within 48
            hours. Ensure to fill out all necessary details regarding your
            inquiry, refund, or complaints.
            <br />
            E-mail:festus4537@gmail.com
          </p>
          <h4 className="fw-bold">Call Us</h4>
          <p className="fw-bold">
            Reach us via our customer care hotlines:
            <br />
            Tel: +234 8143430827, +234 7034449344
          </p>
        </div>

        <div className="col-md-6 dspl-items text-center">
          <img
            src="https://media.istockphoto.com/id/1330267908/photo/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center.jpg?s=612x612&w=0&k=20&c=ue1TlDw9O6rvygvROWI2lDiPjDLHOeyADnGgizsrUEM="
            alt="Customer Service"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="container-fluid bg-dark text-white py-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <div className="features-box text-center">
              <div className="bg-dark feat mx-auto">
                <i className="fas fa-truck" style={{ color: "#ebebeb" }}></i>
              </div>
              <h5 className="pt-4 fw-bold">FREE AND FAST DELIVERY</h5>
              <p className="mt-3">
                Free delivery for orders over $10,000 or orders exceeding 2
                tons.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="features-box text-center">
              <div className="bg-dark feat mx-auto">
                <i
                  className="fas fa-headphones"
                  style={{ color: "#ebebeb" }}
                ></i>
              </div>
              <h5 className="pt-4 fw-bold">24/7 CUSTOMER SERVICE</h5>
              <p className="mt-3">
                Friendly 24/7 Customer Support to help you with any account
                issues.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="features-box text-center">
              <div className="bg-dark feat mx-auto">
                <i className="fas fa-ribbon" style={{ color: "#ebebeb" }}></i>
              </div>
              <h5 className="pt-4 fw-bold">MONEY BACK GUARANTEE</h5>
              <p className="mt-3">
                Money returned within 20 days, this is our return/refund policy.
              </p>
            </div>
          </div>

          <div className="col-lg-3 mb-4">
            <div className="features-box text-center">
              <div className="bg-dark feat mx-auto">
                <i className="fas fa-percent" style={{ color: "#ebebeb" }}></i>
              </div>
              <h5 className="pt-4 fw-bold">DISCOUNTS GUARANTEED</h5>
              <p className="mt-3">
                Bulk Order Discounts to help you get the best at budget-friendly
                prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
