import React, { useState } from 'react';

import {
  Button,
  Modal
} from 'react-bootstrap';

import AddIncomeForm from './AddIncomeForm';

const AddIncomeModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button
        onClick={handleShowModal}
      >
        Add Income  
      </Button>

      <Modal
        {...props}
        size="md"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >

        <Modal.Header closeButton>
          <Modal.Title>Add Income</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddIncomeForm
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
};

export default AddIncomeModal;