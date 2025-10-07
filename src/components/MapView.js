import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  return (
    <div>
      <h2>Herb Origin Map</h2>
      <MapContainer center={[20, 77]} zoom={5} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[20, 77]}>
          <Popup>Sample Herb Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
