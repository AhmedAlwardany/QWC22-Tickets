import Navbar from "../../components/navbar/Navbar";
import "./reservation.css";
import {useLocation,useNavigate} from 'react-router-dom';
import React, {useState, useEffect  } from "react";

const Reservation = () => {
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [total,setTotal] = useState({
      categoryPrice : 0,
      total : 0
  })
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
   if(category){
     let categoryPrice = location.state.ticketData.availability[category].price;
     setTotal({...total , categoryPrice : categoryPrice});
   }
  }, [category])

  useEffect(() => {
   if(total.categoryPrice && quantity){
     let finalTotal = (total.categoryPrice * quantity).toFixed(2);
     setTotal({...total , total : finalTotal});
     localStorage.setItem('total',JSON.stringify(finalTotal));
   }
  }, [total.categoryPrice,quantity])

   return(
       <div>
         <Navbar/>
         <h1>Confirm Purchase</h1>
         <div className="content">
           <h2>Match: {location.state.ticketData.awayTeam} VS {location.state.ticketData.homeTeam}</h2>
           <h3>
             <span>Category: </span>
             <select className="list" onChange={(e)=>setCategory(e.target.value)}>
                 <option value="none" selected disabled hidden>Select Category</option>
                 <option value="category1">Category 1</option>
                 <option value="category2">Category 2</option>
                 <option value="category3">Category 3</option>
             </select></h3>
           <h3>
             <span>Quantity: </span>
             <select className="list" onChange={(e)=>setQuantity(e.target.value)}>
                   <option value="none" selected disabled hidden>Select Quantity</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
             </select></h3>
           <h3 >Price: ${total.total}</h3> 
         </div>     
         <div className="btn-control">
           <button className="purchase" onClick={()=> navigate('/Payment')}>Purchase</button>
           <button className="purchase btn" onClick={()=> navigate('/',{replace:true})}>Back to home</button>
         </div>
       </div>
   )
}

export default Reservation;
