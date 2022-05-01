import React, { useState } from "react";

import {
  Button,
  Modal
} from 'react-bootstrap';

import EditExpenseForm from "./EditExpenseForm";

const EditExpenseModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button
        className="w-100 mb-1"
        variant='secondary'
        size='sm'
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
          <EditExpenseForm
            handleCloseModal={handleCloseModal}
            expense={props.expense}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditExpenseModal;