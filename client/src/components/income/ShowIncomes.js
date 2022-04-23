import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  Table,
  Button,
  Modal
} from 'react-bootstrap';

import {
  getIncomes,
  deleteIncome,
  updateIncome
} from "../../actions";

import EditIncomeForm from "./EditIncomeForm";

const ShowIncomes = () => {
  const incomes = useSelector(state => state.incomeTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
  }, [incomes]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <Table stripped="true" bordered hover responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Cattegory</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        {
          Array.from(incomes).map((income) => {
            return (
              <tbody key={income._id}>
                <tr>
                  <td>{income.title}</td>
                  <td>{income.amount}</td>
                  <td>{income.cattegory}</td>
                  <td>{income.description}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteIncome(income._id))}
                    >
                      Delete
                    </Button>

                    <EditIncomeModal
                      dispatch={dispatch}
                      income={income}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        }
      </Table>
    </div>
  );
};

const EditIncomeModal = ({ dispatch, income }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <Button
        onClick={handleShowModal}
      >
        Edit
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Income</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditIncomeForm />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch(updateIncome(income._id, { amount: 4444 }))
            handleCloseModal()
          }}
          >
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
};

export default ShowIncomes;