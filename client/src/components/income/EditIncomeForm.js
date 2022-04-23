import React from 'react';
import { Form, Field } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux';

import { addIncome } from '../../actions';

import {
  Container,
  Row,
  Col
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

const EditIncomeForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(addIncome(values));

    console.log('incomeAdded');
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit}>

            <h2>Add Income </h2>

            <Row>
              <Col>
                <Field
                  name="title"
                  render={({ input, meta }) => (
                    <div>
                      <label>Title</label>
                      <input {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </Col>

              <Col>
                <Field
                  name="amount"
                  render={({ input, meta }) => (
                    <div>
                      <label>Amount</label>
                      <input {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </Col>

              <Col>
                <Field
                  name="description"
                  render={({ input, meta }) => (
                    <div>
                      <label>Description</label>
                      <input {...input} />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                />
              </Col>

              <Col>
                <div>
                  <label>Cattegory</label>
                  <Field name="cattegory" component="select">
                    <option />
                    <option value="wage">Wage</option>
                    <option value="commission">Commission</option>
                  </Field>
                </div>
              </Col>

              <Col>
                <button type="submit">Submit</button>
              </Col>
            </Row>
          </form>
        )}
      />
    </Container>
  );
}

export default EditIncomeForm;