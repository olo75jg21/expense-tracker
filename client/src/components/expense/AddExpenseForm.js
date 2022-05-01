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
import validate from '../../utils/validateForm';

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
                    <option value="rent">Rent</option>
                    <option value="insurance">Insurance</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="groceries">Groceries</option>
                    <option value="carPayment">Car Payment</option>
                    <option value="publicTransport">Public Transport</option>
                    <option value="internet">Internet</option>
                    <option value="cellPhone">Cell Phone</option>
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