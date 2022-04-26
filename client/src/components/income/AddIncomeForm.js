import React from 'react';
import { Form, Field } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { addIncome } from '../../actions';
import validate from '../../utils/validateIncomeForm';

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
        validate={validate}
        initialValues={{title: "", amount: null, description: ""}}
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
                    <option value="wage">Wage</option>
                    <option value="commission">Commission</option>
                  </Field>
                </div>
              </Col>
            </Row>

            <Row className='mt-1 mb-3'>
              <Col>
                <Button variant='success' size="lg" type="submit">Add Income</Button>
              </Col>
            </Row>
          </form>
        )}
      />
    </Container>
  );
}

export default AddIncomeForm;