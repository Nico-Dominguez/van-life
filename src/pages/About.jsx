// About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <img
          src="/assets/bg-img.png"
          alt="Van parked in nature"
          className="about-hero-image"
        />
      </section>

      <section className="about-content">
        <div className="about-content-inner">
          <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            className="btn btn-dark"
            to="/vans"
            aria-label="Browse our van collection"
          >
            Explore our vans
          </Link>
        </div>
      </section>
    </div>
  );
}
