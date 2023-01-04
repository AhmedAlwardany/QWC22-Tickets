import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tickets from "./pages/home/Tickets";

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Tickets/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
