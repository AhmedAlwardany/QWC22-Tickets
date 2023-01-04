import { useState} from "react";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Tickets = () => {
  const [val,setVal] = useState('')
  const {data,loading} = useFetch(`http://localhost:8800/teams/${val}`)
    return(
        <div>
          <Navbar/>
               <div className="pageTitle">Tickets</div>
                <div className="team">Team</div>
                <div className="containerButtons">
                  <select className="teamsList" onChange={(e)=>setVal(e.target.value)}>
                  <option value="none" selected disabled hidden>Select Teams</option>
                    <option value="All">All</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Australia">Australia</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="England">England</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Iran">Iran</option>
                    <option value="Japan">Japan</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                  </select>
                   </div>
          {loading ? (
        "Loading please wait"
      ) : (
        <><div className="allmatches">
          {data.map(({awayTeam, homeTeam, matchNumber, group, dateUtc, location}) => (
        <div className="match">
          <div className="teams">{awayTeam} VS {homeTeam}</div>
            <div className="location">{location}</div>
            <div className="date">{dateUtc}</div>
            <div className="bookButtonDiv"><button className="bookButton">Book Now</button></div>
            <div className="roundDetails">
              <div className="tour">Tournament: World Cup 2022</div>
              <div className="matchNumber">Match No.{matchNumber}</div>
              <div className="group">Group:{group}</div>
            </div>
              </div>
       ))}
            
          </div></>)}
          
        </div>
    )
}

export default Tickets;