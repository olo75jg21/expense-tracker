import React from 'react';

const ShowIncome = ({ incomes }) => {
  return (
    <div>
      <h5>ShowIncome.js</h5>
      {Array.from(incomes).forEach((income) => {
        return <p>income.amount</p>
      })}
    </div>
  );
};

export default ShowIncome;