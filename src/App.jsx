import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/bottombar" element={<BottomBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
