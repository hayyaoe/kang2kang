import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bottombar" element={<BottomBar />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
