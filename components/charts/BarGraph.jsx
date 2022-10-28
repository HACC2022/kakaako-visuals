import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph({
  xAxis,
  yAxis,
  displayData,
  xAxisLabel,
  yAxisLabel,
  graphName,
  graphLabel,
  selectedCheckbox,
}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const getXArray = selectedCheckbox.map((el) => {
    return el[xAxisLabel];
  });

  console.log(getXArray, 'xxx');

  console.log(yAxis, 'yAxis');
  console.log(xAxis, 'xAxis');
  console.log(displayData, 'displayData');
  console.log(xAxisLabel, 'xAxisLabel');
  console.log(yAxisLabel, 'yAxisLabel');
  console.log(graphName, 'graphName');
  console.log(graphLabel, 'graphLabel');
  console.log(selectedCheckbox, 'selectedCheckbox');
  const labels = getXArray;

  const data = {
    labels,
    datasets: [
      {
        label: graphLabel,
        data: [0, 1, 2, 3, 4],
        backgroundColor: 'red',
      },
    ],
  };

  return <Bar options={options} data={data} className="max-h-96" />;
}
