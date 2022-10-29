import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  xAxis,
  yAxis,
  displayData,
  xAxisLabel,
  yAxisLabel,
  graphName,
  graphLabel,
  selectedCheckbox,
}) {
  const getXArray = selectedCheckbox.map((x) => {
    return x[xAxisLabel];
  });

  const getYArray = selectedCheckbox.map((y) => {
    return y[yAxisLabel];
  });

  // console.log(getXArray, '🥶');
  // console.log(getYArray, '🧶');
  const data = {
    labels: getYArray,
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: graphLabel,
        data: getXArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(data.labels, 'LABELS');

  return (
    <div>
      <Doughnut data={data} className="max-h-96" />
    </div>
  );
}
