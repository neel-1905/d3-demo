import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selections from "./pages/Selections";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className=" max-w-7xl mx-auto">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Selections />} path="/selections" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
