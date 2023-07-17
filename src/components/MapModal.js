import React from "react";
import { Modal } from 'react-bootstrap';
import { BasicInfo } from "views/City/BasicInfo";

export const MapModal = ({ show, onHide, cityData }) => (
  <Modal
    show={show}
    onHide={onHide}
    size='md'
    centered
  >
    <Modal.Body>
      <BasicInfo cityData={cityData} />
    </Modal.Body>
  </Modal>
);