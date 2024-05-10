import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";
import OrderDetail from "./pages/OrderDetail";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bottombar" element={<BottomBar />} />
          <Route
            path="/order-detail"
            element={<OrderDetail category="Bebersih" />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
