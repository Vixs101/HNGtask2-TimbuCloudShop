import React from "react";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <section className="md:h-screen px-20" bg-primary text-white>
        <div>
          <h1>Flash sales on all Sofa Series</h1>
          <p>Locate the ideal chair for your workstation: Comfortable, ergonomic, and optimized for your productivity</p>
          <button className="">Shop Now</button>
        </div>
        <img src="/images/heroImage.png" alt="heroImage" />

      </section>
      {/* items */}
      <section className="px-20"></section>
      {/* footer */}
      <section className="px-20"></section>
    </>
  );
}

export default Homepage;
