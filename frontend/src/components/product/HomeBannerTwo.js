import React from "react";

const HomeBannerTwo = () => {
  return (
    <>
      {" "}
      <div className="mt-5">
        <img
          src="/images/banners.jpg"
          alt="banner image"
          className="w-100 h-100"
        />
      </div>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
    </>
  );
};

export default HomeBannerTwo;
