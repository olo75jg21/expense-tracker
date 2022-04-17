import React from "react";

// import ShowIncome from "./ShowIncome";

const ShowIncomes = ({incomes}) => {
  return (
    <div>
      {
        incomes.map((income) => (<p key={income._id}>{income.amount}</p>))
      }
      {
        console.log(incomes)
      }
    </div>
  );
};

export default ShowIncomes;