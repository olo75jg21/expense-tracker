import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  Table,
  Button,
  Tabs,
  Tab,
} from 'react-bootstrap';

import { getIncomes, deleteIncome } from "../../actions";
// import ShowIncome from "./ShowIncome";

const ShowIncomes = () => {
  const incomes = useSelector(state => state.incomeTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
  }, [incomes]);

  return (
    <div>
      <Tabs defaultActiveKey="one-time" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="one-time" title="Disposable">
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
        </Tab>
        <Tab eventKey="recurring" title="Recurring">
          <h1>second tab</h1>
        </Tab>
      </Tabs>

    </div>
  );
};

export default ShowIncomes;