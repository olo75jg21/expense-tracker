import React from 'react';
import { Form, Field } from 'react-final-form'
import { useSelector, useDispatch } from 'react-redux';

import { addIncome } from '../actions';

const validate = () => {
  console.log('validate');
};

const AddIncomeForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(addIncome(values));
    console.log('addIncome');
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Add Income </h2>
          <div>
            <label>Title</label>
            <Field name="title" component="input" placeholder="" />
          </div>

          <div>
            <label>Amount</label>
            <Field name="amount" component="input" placeholder="" />
          </div>

          <div>
            <label>Description</label>
            <Field name="description" component="input" placeholder="" />
          </div>

          <div>
            <label>Cattegory</label>
            <Field name="cattegory" component="input" placeholder="" />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}

const Incomes = () => {
  const auth = useSelector(state => state.auth);

  if (!auth) {
    return (
      <div>
        <p>Please, log in</p>
      </div>
    )
  }

  return (
    <div>
      <AddIncomeForm />
    </div>
  );
};

export default Incomes;