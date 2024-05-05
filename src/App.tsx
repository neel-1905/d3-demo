import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Selections from "./pages/Selections";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import DataJoinsPage from "./pages/DataJoinsPage";

function App() {
  const routes = [
    { element: <Home />, path: "/" },
    { element: <Selections />, path: "/selections" },
    { element: <DataJoinsPage />, path: "/data-joins" },
  ];

  return (
    <div>
      <Router>
        <Navbar />
        <div className=" max-w-7xl mx-auto">
          <Routes>
            {routes.map((item) => {
              return <Route element={item.element} path={item.path} />;
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
