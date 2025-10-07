import { QRCodeCanvas } from "qrcode.react";

function QRGenerator({ data }) {
  return (
    <div>
      <QRCodeCanvas value={JSON.stringify(data)} size={200} />
    </div>
  );
}

export default QRGenerator;