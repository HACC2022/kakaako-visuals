import PieChart from './PieChart';
import Table from './Table';

export function Graph() {
  return (
    <>
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className=" rounded-lg border-4 border-dashed border-gray-200">
          <PieChart />
        </div>
      </div>
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className=" rounded-lg border-4 border-dashed border-gray-200">
          <Table />
        </div>
      </div>
    </>
  );
}
