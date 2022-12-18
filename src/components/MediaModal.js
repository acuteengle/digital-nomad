import React from "react";
import { Modal } from 'react-bootstrap';

export const MediaModal = ({ show, onHide, modalLink }) => {

  if (!modalLink) return null;

  let BodyComponent;
  let size;
  let height;
  if (modalLink.includes('youtube')) {
    /*
      Example normal link:
      https://www.youtube.com/watch?v=muUZOSlw_A8

      Example embed link:
      https://www.youtube.com/embed/muUZOSlw_A8
    */

    const embedLink = modalLink.replace('watch?v=', 'embed/');

    BodyComponent = <iframe src={embedLink} title="YouTube video player" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }} allowFullScreen={true} />

    size = 'xl';
    height = '60vh';
  }
  else if (modalLink.includes('instagram')) {
    /*
      Example normal link: 
      https://www.instagram.com/p/CiqCNmzLqXE/

      Example embed link:
      https://www.instagram.com/p/CiqCNmzLqXE/embed
    */

    const embedLink = modalLink + "embed";

    BodyComponent = <iframe src={embedLink} width="400" height="725" title="Instagram Post" frameBorder="1" />

    size = 'md';
  }
  else if (modalLink.includes('maps')) {
    /*
      Example normal link:
      https://www.google.com/maps/d/u/0/edit?mid=194Pm3DXudT0JV9MN53flZIaUdbyOvwY&usp=sharing

      Example embed link:
      https://www.google.com/maps/d/u/0/embed?mid=194Pm3DXudT0JV9MN53flZIaUdbyOvwY&ehbc=2E312F
    */

    let embedLink = modalLink.replace('usp=sharing', 'ehbc=2E312F');
    embedLink = embedLink.replace('edit', 'embed');

    BodyComponent = <iframe src={embedLink} title="My Map" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }} frameBorder="1" />

    size = 'xl';
    height = '90vh';
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{ width: "100%", height, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {BodyComponent}
        </div>
      </Modal.Body>
    </Modal>
  );
}