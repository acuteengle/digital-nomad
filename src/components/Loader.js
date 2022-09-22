import React from "react";
import { Spinner } from "react-bootstrap";

export const Loader = () => (
  <div style={{ height: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Spinner animation="grow" variant="dark" />
    <h5 style={{ marginTop: 16 }}>"Wasting Time"</h5>
  </div>
);