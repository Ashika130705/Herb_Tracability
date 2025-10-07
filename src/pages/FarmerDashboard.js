import { useState } from "react";
import FarmerForm from "../components/FarmerForm";
import QRGenerator from "../components/QRGenerator";

function FarmerDashboard() {
  const [herbData, setHerbData] = useState(null);

  const handleFormSubmit = (data) => {
    setHerbData(data);
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Farmer Dashboard</h2>
      <p className="muted">Enter herb details and capture your location to generate a QR code.</p>
      <FarmerForm onSubmit={handleFormSubmit} />
      {herbData && (
        <div style={{ marginTop: 20 }}>
          <h3>Generated QR Code</h3>
          <QRGenerator data={herbData} />
        </div>
      )}
    </div>
  );
}

export default FarmerDashboard;