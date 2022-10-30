import Loading from '../Loading';
import Sidebar from '../Sidebar';
import DatasetLayout from './DatasetLayout';

export default function DatasetContainer({displayData}) {
  if (!displayData) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-row h-screen sm:px-1 lg:px-2 flex">
        <Sidebar displayData={displayData} />
        <div className="w-full flex flex-col">
          <DatasetLayout displayData={displayData} />
        </div>
      </div>
    );
  }
}
