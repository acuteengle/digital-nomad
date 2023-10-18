import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Map as PigeonMap, Marker, ZoomControl } from "pigeon-maps";
import { stamenTerrain } from 'pigeon-maps/providers';
import { LOCATIONS } from "AppConstants";
import { MapModal } from "components/MapModal";

export const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <Container className="pageContainer">
      <h1>Map</h1>
      <PigeonMap height={700} provider={stamenTerrain} defaultCenter={[35.977844, -7.986475]} defaultZoom={2}>
        <ZoomControl />
        {LOCATIONS.filter(location => !location.shortTrip).map((location) => typeof location === 'object' ? (
          <Marker
            width={50}
            anchor={[location.lattitude, location.longitude]}
            onClick={() => setSelectedLocation(location)}
          />
        ) : null)}
      </PigeonMap>
      <MapModal show={selectedLocation} onHide={() => setSelectedLocation(null)} cityData={selectedLocation} />
    </Container >
  )
}