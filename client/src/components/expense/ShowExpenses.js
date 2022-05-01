import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  Table,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

import {
  getExpenses
} from "../../actions";

const ShowExpenses = () => {
  const expenses = useSelector(state => state.expenseTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenses());
  }, [expenses]);

  return (
    <div>
      <Table size="sm" hover responsive >

        <thead>
          <tr>
            <th style={{ width: '12%' }}>Title</th>
            <th style={{ width: '10%' }}>Amount</th>
            <th style={{ width: '8%' }}>Cattegory</th>
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
                  <td>{expense.cattegory}</td>
                  <td style={{ wordBreak: 'break-all' }}>{expense.description}</td>
                  <td>
                    <Container>
                      <Row xs={1} sm={1} md={1} lg={2} className="text-center align-middle">
                        <Col>
                          {/* <EditIncomeModal
                            dispatch={dispatch}
                            income={income}
                          /> */}
                        </Col>
                        <Col>
                          <Button
                            className="w-100"
                            variant="secondary"
                            size="sm"
                          // onClick={() => dispatch(deleteIncome(income._id))}
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