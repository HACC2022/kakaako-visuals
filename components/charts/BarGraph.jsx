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

export const options = {
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

export default function BarGraph({sales, companyName}) {
  const labels = companyName;
  const data = {
    labels,
    datasets: [
      {
        label: 'Annual Sales',
        data: sales,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
