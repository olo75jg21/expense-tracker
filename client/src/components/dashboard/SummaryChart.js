import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import randomRgba from "random-rgba";

ChartJS.register(ArcElement, Tooltip);

const SummaryChart = ({ chartData }) => {
  const [graph, setGraph] = useState({
    labels: [],
    data: [],
    colors: []
  });

  let result = Array.from(chartData).reduce((acc, curr) => {
    let item = acc.find(item => item.category === curr.category);

    if (item) {
      item.amount += curr.amount;
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);

  useEffect(() => {
    const labels = [];
    const data = [];
    const colors = [];

    result.forEach(item => {
      labels.push(item.cattegory);
      data.push(item.amount);
      colors.push(randomRgba());
    });

    setGraph({
      labels,
      data,
      colors
    });
  }, [chartData]);

  const data = {
    labels: graph.labels,
    datasets: [
      {
        label: '# of Votes',
        data: graph.data,
        backgroundColor: graph.colors,
        borderColor: graph.colors,
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '50vh', width: '30vw' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SummaryChart;