import React from 'react';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';

import { updateIncome } from '../../actions';

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

const EditIncomeForm = ({ handleCloseModal, income }) => {
  const { _id, title, amount, cattegory, description } = income;

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(updateIncome(_id, values));
    handleCloseModal();

    console.log('incomeEdited');
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ title, amount, cattegory, description }}
        render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit}>

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


            </Row>

            <Row>
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
            </Row>

            <Row>
              <Col>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>

          </form>
        )}
      />
    </Container>
  );
}

export default EditIncomeForm;