import React from 'react';
import { Form, Field } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux';

import { addIncome } from '../../actions';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

// Function to validate addIncome form
const validate = ({ title, amount, description }) => {
  const errors = {};
  if (!title) {
    title = "Title is required";
  }

  if (!amount) {
    errors.amount = "Amount is required";
  } else if (isNaN(amount)) {
    errors.amount = "Amount has to be a number";
  }

  if (description) {
    if (description.length < 5) {
      errors.description = "Description must be at least 5 letters long";
    }
  }

  return errors;
};

const AddIncomeForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(addIncome(values));
    handleCloseModal();

    console.log('incomeAdded');
  }

  return (
    <Container className="text-center">
      <Form
        onSubmit={onSubmit}
        // validate={validate}
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
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
                    <option value="wage">Wage</option>
                    <option value="commission">Commission</option>
                  </Field>
                </div>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button size="lg" type="submit">Add Income</Button>
              </Col>
            </Row>
          </form>
        )}
      />
    </Container>
  );
}

export default AddIncomeForm;