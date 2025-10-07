import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";  // library for QR code

function FarmerForm({ onSubmit }) {
  const [herb, setHerb] = useState("");
  const [location, setLocation] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  // Get GPS location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  // Submit herb details (no backend, just store locally)
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { herb, location };
    setSubmittedData(data); // save data to show in QR
    alert("✅ Herb logged successfully!");
    if (onSubmit) onSubmit(data);
  };

  return (
    <div className="card" style={{ background: '#f8fafc' }}>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="herb">Herb Name</label>
        <input
          id="herb"
          type="text"
          placeholder="e.g. Tulsi"
          value={herb}
          onChange={(e) => setHerb(e.target.value)}
          className="input"
          required
        />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
          <button type="button" onClick={getLocation} className="btn btn-secondary">Get Location</button>
          {location && <span className="muted">📍 Lat: {location.lat}, Lng: {location.lng}</span>}
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>

      {/* Show QR code after submit */}
      {submittedData && (
        <div style={{ marginTop: 16 }}>
          <h3>Generated QR Code:</h3>
          <QRCodeCanvas
            value={JSON.stringify(submittedData)}
            size={200}
          />
        </div>
      )}
    </div>
  );
}

export default FarmerForm;