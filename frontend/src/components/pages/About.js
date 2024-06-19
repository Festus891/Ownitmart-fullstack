import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="text-center mb-4">
            <img
              src="/images/ownit.png"
              style={{ width: "4rem" }}
              alt="ownit_logo"
            />
            <h3 className="fw-bold">About Us</h3>
          </div>
          <p className="fw-bold">
            Welcome to OwnitMart online shopping, your one-stop destination for
            all your drop shipping needs. We are dedicated to providing you with
            a seamless and hassle-free experience in the world of online retail.
          </p>
          <h4 className="fw-bold">Our Mission here at OwnitMart</h4>
          <p className="fw-bold">
            Our mission is to empower entrepreneurs and small businesses by
            offering a wide range of high-quality products at competitive
            prices. We aim to simplify the drop shipping process and help you
            build a successful online business.
          </p>
          <h4 className="fw-bold">Our Commitment to Quality</h4>
          <p className="fw-bold">
            We understand the importance of delivering top-notch products to
            your customers. That's why we have established strong partnerships
            with trusted suppliers who adhere to strict quality control
            standards. Rest assured, every product you find on our website is
            carefully selected and thoroughly inspected to meet your customer's
            expectations.
            <br />
            <br />
            Thank you for choosing OwnitMart. We look forward to partnering with
            you on your drop shipping journey and helping you achieve your
            business goals.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://media.istockphoto.com/id/1313362136/photo/beautiful-woman-shopping.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=bVSq6TaBv0BfWCoWdPCbzsWlY7eyTHLjg8f9wuedro4="
            alt="Shopping Woman"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="container-fluid bg-dark text-white py-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h4 className="fw-bold text-center">Order Fulfillment</h4>
            <p className="fw-bold">
              We take pride in our efficient order fulfillment process. Once you
              place an order with us, our dedicated team works diligently to
              ensure prompt processing and shipping. We understand that time is
              of the essence in the e-commerce world, and we strive to deliver
              your products to your customers as quickly as possible.
            </p>
          </div>

          <div className="col-lg-3 mb-4">
            <h4 className="fw-bold">Competitive Pricing</h4>
            <p className="fw-bold">
              We believe that competitive pricing is key to your success as a
              drop shipper. That's why we negotiate with our suppliers to offer
              you the best possible prices. By eliminating the need for
              inventory storage and management, we help you minimize costs and
              maximize profits.
            </p>
          </div>

          <div className="col-lg-3 mb-4">
            <h4 className="fw-bold">Easy to Use Platform</h4>
            <p className="fw-bold">
              Navigating through our website is a breeze. Our user-friendly
              platform is designed to make your drop shipping journey as smooth
              as possible. From browsing our extensive product catalog to
              managing your orders, we provide you with the tools and resources
              you need to run your business efficiently.
            </p>
          </div>

          <div className="col-lg-3 mb-4">
            <h4 className="fw-bold">Customer Support</h4>
            <p className="fw-bold">
              We value your satisfaction and are committed to providing
              exceptional customer support. Our friendly and knowledgeable team
              is always ready to assist you with any inquiries or concerns you
              may have. We believe in building strong relationships with our
              customers and strive to exceed your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
