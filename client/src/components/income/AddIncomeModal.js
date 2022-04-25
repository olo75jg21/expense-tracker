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
    <div className='text-center mt-3 mb-3 size=""'>
      <Button
        variant='success'
        onClick={handleShowModal}
      >
        Add Income
      </Button>

      <Modal
        {...props}
        size="sm"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >

        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <AddIncomeForm
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
};

export default AddIncomeModal;