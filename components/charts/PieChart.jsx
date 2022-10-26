import {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({sales, companyName}) {
  // const [sales, setSales] = useState(0);
  // const [companyName, setCompanyNames] = useState('');

  // const getData = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);

  //   setCompanyNames(
  //     data.result.records.map((name) => {
  //       return name['Name'];
  //     })
  //   );
  //   setSales(
  //     data.result.records.map((sale) => {
  //       return Number(sale['Annual Sales']);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   getData(link);
  // }, []);

  // console.log('names', companyName);
  // console.log('sales', sales);

  const data = {
    labels: companyName,
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Annual Sales',
        data: sales,
        backgroundColor: ['red', 'blue', 'cyan', 'green', 'orange', 'purple'],
        borderColor: ['white'],
        borderWidth: 5,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} className="max-h-96" />
    </div>
  );
}
