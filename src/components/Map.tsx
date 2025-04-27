// components/Map.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

// Fix for default marker icons in Next.js
const createIcon = (iconUrl: string) => {
  return new L.Icon({
    iconUrl,
    iconRetinaUrl: iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: '/images/marker-shadow.png',
    shadowSize: [41, 41],
  });
};

const defaultIcon = createIcon('/images/marker-icon.png');
const officeIcon = createIcon('/images/marker-icon-blue.png');

interface MapProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    description?: string;
    icon?: 'default' | 'office';
  }>;
  className?: string;
}

const Map = ({
  center = [5.6037, -0.1870], // Default to Accra coordinates
  zoom = 13,
  markers = [],
  className = 'h-[400px] w-full rounded-lg border border-gray-200 shadow-md',
}: MapProps) => {
  const mapRef = useRef<L.Map>(null);

  // Handle map re-centering when center prop changes
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        ref={mapRef}
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {markers.length > 0 ? (
          markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={marker.icon === 'office' ? officeIcon : defaultIcon}
            >
              {marker.title && (
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm">{marker.title}</h3>
                    {marker.description && (
                      <p className="text-xs text-gray-600">{marker.description}</p>
                    )}
                  </div>
                </Popup>
              )}
            </Marker>
          ))
        ) : (
          <Marker position={center} icon={officeIcon}>
            <Popup>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Our Location</h3>
                <p className="text-xs text-gray-600">Cyrus MicroCredit Services</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;