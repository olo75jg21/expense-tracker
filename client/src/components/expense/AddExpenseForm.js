import React from "react"

import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { addExpense } from '../../actions';
import validate from '../../utils/validateIncomeForm';

const AddExpenseForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(addExpense(values));
    handleCloseModal();

    console.log('expenseAdded');
  }

  return (
    <Container className="text-center">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ title: "", amount: null, description: "" }}
        render={({ handleSubmit }) => (

          <form
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Row className='mt-1 mb-3'>
              <Col>
                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Title" />
                      <br />
                      {meta.touched && meta.error && <small>{meta.error}</small>}
                    </div>
                  )}
                />
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Field
                  name="amount"
                  render={({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Amount" />
                      <br />
                      {meta.touched && meta.error && <small>{meta.error}</small>}
                    </div>
                  )}
                />
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Field
                  name="description"
                  render={({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Description" />
                      <br />
                      {meta.touched && meta.error && <small>{meta.error}</small>}
                    </div>
                  )}
                />
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <div>
                  <Field name="cattegory" component="select">
                    <option value="" disabled>Please Select Cattegory</option>
                    <option value="salary">Salary</option>
                    <option value="commission">Commission</option>
                    <option value="interest">Interest</option>
                    <option value="investments">Investments</option>
                    <option value="gifts">Gifts</option>
                    <option value="govermentPayments">Goverment Payments</option>
                  </Field>
                </div>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button variant='secondary' size="lg" type="submit">Add Expense</Button>
              </Col>
            </Row>
          </form>
        )}
      />
    </Container>
  );
};

export default AddExpenseForm;