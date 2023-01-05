import Navbar from "../../components/navbar/Navbar";
import "./reservation.css";
import {useLocation} from 'react-router-dom';
import React, {useState } from "react";

const Reservation = () => {
   const [quantity, setQuantity] = useState("");
   const [category, setCategory] = useState("");
   const location = useLocation();
    return(
        <div>
          <Navbar/>
          <h1>Confirm Purchase</h1>
          <h2>Match: {location.state.ticketData.awayTeam} VS {location.state.ticketData.homeTeam}</h2>
          <h3>Category: <select className="list" onChange={(e)=>setCategory(e.target.value)}>
                  <option value="none" selected disabled hidden>Select Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select></h3>
          <h3>Quantity: <select className="list" onChange={(e)=>setQuantity(e.target.value)}>
                  <option value="none" selected disabled hidden>Select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select></h3>
            <h3>Price: {location.state.ticketData.availability.category1.price}</h3>      
            <button className="purchase">Purchase</button>
        </div>
    )
}

export default Reservation;