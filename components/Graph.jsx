import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import PieChart from './charts/PieChart';
import BarGraph from './charts/BarGraph';
import DoughnutGraph from './charts/DoughnutGraph';

const link =
  'https://opendata.hawaii.gov/api/3/action/datastore_search?resource_id=07c9ec56-d4f3-42d9-9bf5-b74044f83f35&limit=6';

// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Graph({sales, companyName}) {
  // const data = {
  //   labels: companyName,
  //   datasets: [
  //     {
  //       label: 'Annual Sales',
  //       data: sales,
  //       backgroundColor: ['red', 'blue', 'cyan', 'green', 'orange', 'purple'],
  //       borderColor: ['white'],
  //       borderWidth: 5,
  //     },
  //   ],
  // };

  return (
    <div>
      {/* <Pie data={data} className="max-h-96" /> */}
      <PieChart sales={sales} companyName={companyName} />
      <DoughnutGraph />
      <BarGraph sales={sales} companyName={companyName} />
    </div>
  );
}
