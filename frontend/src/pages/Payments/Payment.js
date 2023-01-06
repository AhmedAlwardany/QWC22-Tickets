import React, { useState } from "react";
import './Payment.css';
import StripeContianer from "./StripeContainer";
// import Stadium from './images/Stadium.jpg';

function Payment(){
    const [showItem, setShowItem] = useState(false)
    return(
        <div className="Payment">
            <h1>Qatar World Cup 2022</h1>
            {showItem ? <StripeContianer/> : 
            <>
                <h3>${JSON.parse(localStorage.getItem("total"))}</h3> 
                <img src="https://www.archilizer.com/wp-content/uploads/2019/07/lusail-stadium-doha-qatar_092116_100518-e1569177231541.jpg" alt = "Lusail stadium"/>
                <button onClick={() => setShowItem(true)}>Purchase</button>
            </>}
        </div>
    )
}

export default Payment;