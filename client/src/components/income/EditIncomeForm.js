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
import validate from '../../utils/validateIncomeForm';

const EditIncomeForm = ({ handleCloseModal, income }) => {
  const { _id, title, amount, cattegory, description } = income;

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
        initialValues={{ title, amount, cattegory, description }}
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
                <Field name="cattegory" component="select">
                  <option value="" disabled>Please Select Cattegory</option>
                  <option value="wage">Wage</option>
                  <option value="commission">Commission</option>
                </Field>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button variant="info" type="submit">Edit Income</Button>
              </Col>
            </Row>

          </form>
        )}
      />
    </Container>
  );
};

export default EditIncomeForm;