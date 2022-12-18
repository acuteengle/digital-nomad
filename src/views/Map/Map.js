import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { VisLeafletMap } from '@unovis/react';
import { LeafletMap } from '@unovis/ts';
import { LOCATIONS } from "AppConstants";
import './styles.css';

export const Map = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const pointLatitude = useCallback((d) => d.lattitude, []);
  const pointLongitude = useCallback((d) => d.longitude, []);
  const pointBottomLabel = useCallback((d) => d.city, []);

  return (
    <Container className="pageContainer">
      <h1>Map</h1>
      <p>
        {selectedLocation
          ? <span className="clickable" onClick={() => navigate(`/city/${selectedLocation.key}`)}>{`${selectedLocation.city}, ${selectedLocation.country}`} - "click here to see more"</span>
          : `"click on a marker"`
        }
      </p>
      <VisLeafletMap
        className='mapStyles'
        height="70vh"
        data={LOCATIONS}
        style={`https://api.maptiler.com/maps/positron/style.json?key=4cEIJ9kkNMOX9aeSnXHe`}
        pointLatitude={pointLatitude}
        pointLongitude={pointLongitude}
        pointBottomLabel={pointBottomLabel}
        clusterRadius={10}
        pointRadius={6}
        pointColor='black'
        clusterExpandOnClick={false}
        attribution={[
          `<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>`,
          `<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>`
        ]}
        events={{
          [LeafletMap.selectors.point]: {
            click: (d => {
              if (d.properties.cluster) return;
              setSelectedLocation(d.properties);
            })
          }
        }}
      />
    </Container >
  )
}