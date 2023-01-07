import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tickets from "./pages/shop/Tickets";
import Reservation from "./pages/reservation/Reservation"
import Payment from "./pages/Payments/Payment"
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
