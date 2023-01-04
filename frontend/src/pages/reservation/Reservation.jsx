import React, { useEffect, useState } from "react";
import styles from "./Reservations.module.css";
export default function Reservations() {
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const handleReserve = () => {
    console.log(quantity, category);
  };
  return (
    <>
      <h1>Confirm purchase</h1>
      <div className={styles.reservation}>
        <h2>Reservation details</h2>
        <div className={styles["reservation-body"]}>
          <p>
            <strong>Match:</strong> Spain vs Costa Rica
          </p>
          <p>
            <strong>Time:</strong> 20:00
          </p>
          <p>
            <strong>Category: </strong>
          </p>
          <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option value="" defaultValue="" hidden>
              Select
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
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
            <strong>Total:</strong> $150
          </h4>
        </div>
      </div>
      <button className={styles["btn-primary"]} onClick={handleReserve}>
        Buy Now
      </button>
    </>
  );
}
