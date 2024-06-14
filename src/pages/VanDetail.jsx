import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function VanDetail() {
  const params = useParams();
  console.log(params);

  const [vans, setVans] = useState(null);

  useEffect(() => {
    async function fetchVans() {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchVans();
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {vans ? (
        <div className="van-detail">
          <img src={vans.imageUrl} />
          <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
          <h2>{vans.name}</h2>
          <p className="van-price">
            <span>${vans.price}</span>/day
          </p>
          <p>{vans.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
