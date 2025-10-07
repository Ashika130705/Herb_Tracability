import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import FarmerDashboard from "./pages/FarmerDashboard";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="nav">
        <div className="nav-inner container">
          <div className="brand">Herb Traceability</div>
          <div className="links">
            <NavLink className={({isActive}) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`} to="/">Home</NavLink>
            <NavLink className={({isActive}) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`} to="/farmer">Farmer</NavLink>
            <NavLink className={({isActive}) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`} to="/consumer">Consumer</NavLink>
            <NavLink className={({isActive}) => `btn ${isActive ? 'btn-secondary' : 'btn-ghost'}`} to="/admin">Admin</NavLink>
          </div>
        </div>
      </div>

      <main className="container" style={{ paddingTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/consumer" element={<ConsumerDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;