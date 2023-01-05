import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Reservations.module.css";
export default function Reservations() {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const location = useLocation();
  const handleReserve = () => {
    console.log(quantity, category);
  };
  const match = location.state.match;

  return (
    <>
      <h1>Confirm purchase</h1>
      <div className={styles.reservation}>
        <h2>Reservation details</h2>
        <div className={styles["reservation-body"]}>
          <p>
            <strong>Match:</strong> {match.homeTeam} vs {match.awayTeam}
          </p>
          <p>
            <strong>Time:</strong>{" "}
            {match.dateUtc.split("T")[0] +
              " " +
              match.dateUtc.split("T")[1].split(".")[0]}
          </p>
          <p>
            <strong>Category: </strong>
          </p>
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="" defaultValue="" hidden>
              Select
            </option>
            {Object.keys(match.availability).map((category) => (
              <option value={category}>
                {category[0].toUpperCase() +
                  category.slice(1, category.length - 1) +
                  " " +
                  category[category.length - 1]}
              </option>
            ))}
          </select>
          <p>
            <strong>Quantity:</strong>
          </p>
        </div>
        <div className={styles["reservation-quantity"]}>
          <button
            className={styles["btn-quantity"]}
            onClick={() => setQuantity(quantity - 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className={styles["btn-quantity"]}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className={styles["reservation-footer"]}>
          <h4>
            <strong>Total:</strong>{" "}
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(
              quantity *
                category.price
            )}
          </h4>
        </div>
      </div>
      <button className={styles["btn-primary"]} onClick={handleReserve}>
        Buy Now
      </button>
    </>
  );
}
