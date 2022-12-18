import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Map as PigeonMap, Marker, ZoomControl } from "pigeon-maps";
import { stamenTerrain } from 'pigeon-maps/providers';
import { LOCATIONS } from "AppConstants";

export const Map = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <Container className="pageContainer">
      <h1>Map</h1>
      <p>
        {selectedLocation
          ? <span className="clickable" onClick={() => navigate(`/city/${selectedLocation.key}`)}>{`${selectedLocation.city}, ${selectedLocation.country}`} - "click here to see more"</span>
          : `"click on a marker"`
        }
      </p>
      <PigeonMap height={700} provider={stamenTerrain} defaultCenter={[35.977844, -7.986475]} defaultZoom={2}>
        <ZoomControl />
        {LOCATIONS.map((location) => (
          <Marker width={50} anchor={[location.lattitude, location.longitude]} onClick={() => setSelectedLocation(location)} />
        ))}
      </PigeonMap>
    </Container >
  )
}