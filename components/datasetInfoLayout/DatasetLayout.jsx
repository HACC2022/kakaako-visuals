import Loading from '../Loading';
import Sidebar from '../Sidebar';
import DatasetBadges from './DatasetBadges';
import DatasetHeader from './DatasetHeader';

export default function DatasetLayout({displayData}) {
  if (!displayData) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-row h-screen sm:px-1 lg:px-2 flex">
        <Sidebar displayData={displayData} />
        <div className="w-full flex flex-col">
          <DatasetHeader displayData={displayData} />
        </div>
      </div>
    );
  }
}
