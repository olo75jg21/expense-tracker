import React, { useState } from "react";

import {
  Button,
  Modal
} from 'react-bootstrap';

import EditIncomeForm from "./EditIncomeForm";

const EditIncomeModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button
        variant='info'
        onClick={handleShowModal}
      >
        Edit
      </Button>

      <Modal
        size="sm"
        show={showModal}
        backdrop="static"
        onHide={handleCloseModal}
      >

        <Modal.Header closeButton />

        <Modal.Body>
          <EditIncomeForm
            handleCloseModal={handleCloseModal}
            income={props.income}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditIncomeModal;