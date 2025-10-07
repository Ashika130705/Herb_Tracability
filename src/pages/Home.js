import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="card" style={{ padding: 32, marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 32 }}>Welcome to Herb Traceability</h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Track medicinal herbs from farm to consumer with QR codes and live location.
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/farmer">Get Started as Farmer</Link>
          <Link className="btn btn-secondary" to="/consumer">Scan as Consumer</Link>
          <Link className="btn btn-ghost" to="/admin">Admin Panel</Link>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>For Farmers</h3>
          <p className="muted">Log harvest details and auto-capture GPS to generate a QR code.</p>
          <Link className="btn btn-primary" to="/farmer">Open Farmer Dashboard</Link>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>For Consumers</h3>
          <p className="muted">Scan QR to verify origin, location, and authenticity of herbs.</p>
          <Link className="btn btn-secondary" to="/consumer">Open Consumer Dashboard</Link>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>For Admins</h3>
          <p className="muted">Review submissions and approve to enable QR downloads.</p>
          <Link className="btn btn-ghost" to="/admin">Open Admin Dashboard</Link>
        </div>
      </section>
    </div>
  );
}
export default Home;