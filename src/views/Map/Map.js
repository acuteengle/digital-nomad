import React from "react";
import { Container } from "react-bootstrap";
import { Map as PigeonMap, Marker, ZoomControl } from "pigeon-maps";
import { stamenTerrain } from 'pigeon-maps/providers';
import { LOCATIONS } from "AppConstants";

export const Map = () => (
  <Container className="pageContainer">
    <h1>Map</h1>
    <PigeonMap height={700} provider={stamenTerrain} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <ZoomControl />
      <Marker width={50} anchor={[70.879, 4.6997]} />
      {LOCATIONS.map(({ lattitude, longitude, city }) => (
        <Marker width={50} anchor={[lattitude, longitude]} onClick={() => alert(city)} />
      ))}
    </PigeonMap>
  </Container>
);