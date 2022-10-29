import Sidebar from '../Sidebar';
import DatasetInfoHeader from './DatasetHeader';

export default function DatasetLayout() {
  return (
    <div className="flex flex-row h-screen sm:px-1 lg:px-2 flex">
      <Sidebar />
      <DatasetInfoHeader />
    </div>
  );
}
