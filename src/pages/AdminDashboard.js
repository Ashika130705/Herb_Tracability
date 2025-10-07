import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function AdminDashboard() {
  // Dummy herb data with "status"
  const [herbs, setHerbs] = useState([
    { id: 1, name: "Tulsi", farmer: "Ramesh", lat: 12.9255, lng: 74.8407, status: "pending" },
    { id: 2, name: "Ashwagandha", farmer: "Sita", lat: 13.0123, lng: 77.5544, status: "pending" },
    { id: 3, name: "Neem", farmer: "Kiran", lat: 12.8765, lng: 74.6543, status: "pending" },
  ]);

  // Approve function
  const approveHerb = (id) => {
    setHerbs(
      herbs.map((herb) =>
        herb.id === id ? { ...herb, status: "approved" } : herb
      )
    );
  };

  // Reject function
  const rejectHerb = (id) => {
    setHerbs(
      herbs.map((herb) =>
        herb.id === id ? { ...herb, status: "rejected" } : herb
      )
    );
  };

  // Function to download QR as PNG
  const downloadQR = (herb) => {
    const svg = document.getElementById(`qr-${herb.id}`);
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `${herb.name}-qr.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>🌿 Admin Dashboard</h2>
      <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f1f5f9' }}>
              <th style={th}>ID</th>
              <th style={th}>Herb Name</th>
              <th style={th}>Farmer</th>
              <th style={th}>Location</th>
              <th style={th}>Status</th>
              <th style={th}>QR Code</th>
              <th style={th}>Download</th>
            </tr>
          </thead>
          <tbody>
            {herbs.map((herb) => (
              <tr key={herb.id}>
                <td style={td}>{herb.id}</td>
                <td style={td}>{herb.name}</td>
                <td style={td}>{herb.farmer}</td>
                <td style={td}>{herb.lat}, {herb.lng}</td>
                <td style={td}>
                  {herb.status === 'approved' ? (
                    <span style={{ color: '#16a34a', fontWeight: 700 }}>Approved ✅</span>
                  ) : herb.status === 'rejected' ? (
                    <span style={{ color: '#dc2626', fontWeight: 700 }}>Rejected ❌</span>
                  ) : (
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                      <button className="btn btn-secondary" onClick={() => approveHerb(herb.id)}>Approve</button>
                      <button className="btn btn-ghost" onClick={() => rejectHerb(herb.id)}>Reject</button>
                    </div>
                  )}
                </td>
                <td style={td}>
                  {herb.status === 'approved' && (
                    <QRCodeSVG id={`qr-${herb.id}`} value={JSON.stringify(herb)} size={80} />
                  )}
                </td>
                <td style={td}>
                  {herb.status === 'approved' && (
                    <button className="btn btn-primary" onClick={() => downloadQR(herb)}>Download QR</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th = { textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid #e2e8f0' };
const td = { textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid #e2e8f0' };

export default AdminDashboard;