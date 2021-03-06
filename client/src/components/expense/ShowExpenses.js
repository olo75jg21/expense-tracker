import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  getExpenses,
  deleteExpense
} from "../../actions";

import EditExpenseModal from './EditExpenseModal';

const ShowExpenses = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(state => state.expenseTransaction);

  useEffect(() => {
    if (expenses.expenses !== undefined) {
      dispatch(getExpenses());
    }
  }, [expenses]);

  return (
    <div>
      <Table size="sm" hover responsive >

        <thead>
          <tr>
            <th style={{ width: '12%' }}>Title</th>
            <th style={{ width: '10%' }}>Amount</th>
            <th style={{ width: '8%' }}>Category</th>
            <th style={{ width: '50%' }}>Description</th>
            <th style={{ width: '20%', wordBreak: 'normal' }}></th>
          </tr>
        </thead>
        {
          Array.from(expenses).map((expense) => {
            return (
              <tbody key={expense._id}>
                <tr>
                  <td style={{ wordBreak: 'break-all' }}>{expense.title}</td>
                  <td style={{ wordBreak: 'break-all' }}>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td style={{ wordBreak: 'break-all' }}>{expense.description}</td>
                  <td>
                    <Container>
                      <Row xs={1} sm={1} md={1} lg={2} className="text-center align-middle">
                        <Col>
                          <EditExpenseModal
                            dispatch={dispatch}
                            expense={expense}
                          />
                        </Col>
                        <Col>
                          <Button
                            className="w-100"
                            variant="secondary"
                            size="sm"
                            onClick={() => dispatch(deleteExpense(expense._id))}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </Container>
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

export default ShowExpenses;