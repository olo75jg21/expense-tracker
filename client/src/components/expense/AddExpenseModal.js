import React, { useState } from "react";

import {
  Button,
  Modal
} from 'react-bootstrap';

import AddExpenseForm from "./AddExpenseForm";

const AddExpenseModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className='text-center mt-3 mb-3'>
      <Button
        className='w-25'
        variant='secondary'
        onClick={handleShowModal}
      >
        Add Expense
      </Button>

      <Modal
        {...props}
        size="sm"
        show={showModal}
        backdrop="static"
        onHide={handleCloseModal}
      >

        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <AddExpenseForm
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddExpenseModal;