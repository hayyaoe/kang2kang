import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";
import OrderDetail from "./pages/OrderDetail";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
