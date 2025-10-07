import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

const ConsumerDashboard = () => {
  const [scannedData, setScannedData] = useState("");

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Consumer Dashboard</h2>
      <p className="muted">Allow camera permission and point to a QR to verify details.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
        <QRScanner onScan={(data) => setScannedData(data)} />
        {scannedData && (
          <div className="card" style={{ background: '#f1f5f9' }}>
            <h3 style={{ marginTop: 0 }}>Scanned Result</h3>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
{(() => { try { return JSON.stringify(JSON.parse(scannedData), null, 2); } catch (e) { return String(scannedData); } })()}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsumerDashboard;
