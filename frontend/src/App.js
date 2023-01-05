import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tickets from "./pages/shop/Tickets";
import Reservation from "./pages/reservation/Reservation"

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Tickets/>}/>
      <Route path="/Reservation" element={<Reservation/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
