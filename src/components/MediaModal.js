import React from "react";
import { Modal } from 'react-bootstrap';

export const MediaModal = ({ show, onHide, modalLink }) => {

  if (!modalLink) return null;

  let BodyComponent;
  let size;
  if (modalLink.includes('youtube')) {
    /*
      Example normal link:
      https://www.youtube.com/watch?v=muUZOSlw_A8

      Example embed link:
      https://www.youtube.com/embed/muUZOSlw_A8
    */

    const embedLink = modalLink.replace('watch?v=', 'embed/');

    BodyComponent = <iframe width="560" height="315" src={embedLink} title="YouTube video player" allowFullScreen={true} />

    size = 'lg';
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

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {BodyComponent}
        </div>
      </Modal.Body>
    </Modal>
  );
}