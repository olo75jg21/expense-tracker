import React from "react";

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
  getIncomes,
  deleteIncome,
} from "../../actions";

import EditIncomeModal from "./EditIncomeModal";

const ShowIncomes = () => {
  const dispatch = useDispatch();

  const incomes = useSelector(state => state.incomeTransaction);

  useEffect(() => {
    if (incomes.incomes !== undefined) {
      dispatch(getIncomes());
    }
  }, [incomes]);

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
          Array.from(incomes).map((income, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td style={{ wordBreak: 'break-all' }}>{income.title}</td>
                  <td style={{ wordBreak: 'break-all' }}>{income.amount}</td>
                  <td>{income.category}</td>
                  <td style={{ wordBreak: 'break-all' }}>{income.description}</td>
                  <td>
                    <Container>
                      <Row xs={1} sm={1} md={1} lg={2} className="text-center align-middle">
                        <Col>
                          <EditIncomeModal
                            dispatch={dispatch}
                            income={income}
                          />
                        </Col>
                        <Col>
                          <Button
                            className="w-100"
                            variant="secondary"
                            size="sm"
                            onClick={() => dispatch(deleteIncome(income._id))}
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

export default ShowIncomes;