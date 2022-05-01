import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const BalanceChart = ({ income, expense }) => {
  const data = {
    labels: ["Incomes", "Expenses"],
    datasets: [
      {
        label: '# of Votes',
        data: [income, expense],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false
  }

  return (
    <div style={{ height: '50vh', width: '30vw' }}>
      <Doughnut options={options} data={data} />
    </div>
  );
}

export default BalanceChart;