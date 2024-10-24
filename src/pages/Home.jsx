// Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [featuredVans, setFeaturedVans] = useState([]);

  useEffect(() => {
    async function fetchFeaturedVans() {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        // Get only the first 3 vans
        setFeaturedVans(data.vans.slice(0, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchFeaturedVans();
  }, []);

  const featuredVanElements = featuredVans.map((van) => (
    <div key={van.id} className="featured-van-tile">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="home-container">
        <div className="home-one">
          <h1>Go on your next adventure in comfort!</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to="vans">Find your van</Link>
        </div>
        <div className="home-two"></div>
      </div>

      <div className="featured-vans-container">
        <h2>Featured Vans</h2>
        <div className="featured-vans-grid">{featuredVanElements}</div>
      </div>
    </>
  );
}
