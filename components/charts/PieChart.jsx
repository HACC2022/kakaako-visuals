import {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
const link =
  'https://opendata.hawaii.gov/api/3/action/datastore_search?resource_id=07c9ec56-d4f3-42d9-9bf5-b74044f83f35&limit=6';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const [sales, setSales] = useState(0);
  const [companyName, setCompanyNames] = useState('');

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log('inPieChart');
    console.log(data);

    setCompanyNames(
      data.result.records.map((name) => {
        return name['Name'];
      })
    );
    setSales(
      data.result.records.map((sale) => {
        return Number(sale['Annual Sales']);
      })
    );
  };

  useEffect(() => {
    getData(link);
  }, []);

  console.log('names', companyName);
  console.log('sales', sales);

  const data = {
    labels: companyName,
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Annual Sales',
        data: sales,
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

  return (
    <div>
      <Pie data={data} className="max-h-96" />
    </div>
  );
}
