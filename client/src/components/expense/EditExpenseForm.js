import React from 'react';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { updateExpense } from '../../actions';
import validate from '../../utils/validateForm';

const EditExpenseForm = ({ expense, handleCloseModal }) => {
  const { _id, title, amount, category, description } = expense;

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(updateExpense(_id, values));
    handleCloseModal();

    console.log('expenseEdited');
  }

  return (
    <Container className='text-center'>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ title, amount, category, description }}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit}>

            <Row className='mt-1 mb-3'>
              <Col>
                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Title" />
                      <br />
                      {meta.touched && meta.error && <small >{meta.error}</small>}
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
                <Field name="category" component="select">
                  <option value="" disabled>Please Select Category</option>
                  <option value="rent">Rent</option>
                  <option value="insurance">Insurance</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="groceries">Groceries</option>
                  <option value="carPayment">Car Payment</option>
                  <option value="publicTransport">Public Transport</option>
                  <option value="internet">Internet</option>
                  <option value="cellPhone">Cell Phone</option>
                </Field>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button variant="secondary" type="submit">Edit Expense</Button>
              </Col>
            </Row>

          </form>
        )}
      />
    </Container>
  );
};

export default EditExpenseForm;