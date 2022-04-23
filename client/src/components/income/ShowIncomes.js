import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  Table,
  Button
} from 'react-bootstrap';

import { getIncomes, deleteIncome } from "../../actions";

const ShowIncomes = () => {
  const incomes = useSelector(state => state.incomeTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
  }, [incomes]);

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
                    <Button
                    >
                      Edit
                    </Button>
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

export default ShowIncomes;