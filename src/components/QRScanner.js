import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = ({ onScan }) => {
  const [result, setResult] = useState("No result");
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        setResult(decodedText);
        if (onScan) onScan(decodedText);
      },
      (errorMessage) => {
        console.warn("QR Scan error:", errorMessage);
      }
    );

    scannerRef.current = scanner;

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((err) => console.error(err));
      }
    };
  }, [onScan]);

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Scan QR Code</h3>
      <div id="qr-reader" style={{ width: "320px", maxWidth: '100%' }}></div>
      <p className="muted" style={{ marginBottom: 0 }}>Scanned Result: {result || 'No result'}</p>
    </div>
  );
};

export default QRScanner;