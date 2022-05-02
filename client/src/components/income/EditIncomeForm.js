import React from 'react';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { updateIncome } from '../../actions';
import validate from '../../utils/validateForm';

const EditIncomeForm = ({ income, handleCloseModal }) => {
  const { _id, title, amount, category, description } = income;

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(updateIncome(_id, values));
    handleCloseModal();

    console.log('incomeEdited');
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
                  <option value="salary">Salary</option>
                  <option value="commission">Commission</option>
                  <option value="interest">Interest</option>
                  <option value="investments">Investments</option>
                  <option value="gifts">Gifts</option>
                  <option value="govermentPayments">Goverment Payments</option>
                </Field>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button variant="secondary" type="submit">Edit Income</Button>
              </Col>
            </Row>

          </form>
        )}
      />
    </Container>
  );
};

export default EditIncomeForm;