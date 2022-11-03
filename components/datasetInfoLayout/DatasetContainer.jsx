import Loading from '../Loading';
import DatasetLayout from './DatasetLayout';

export default function DatasetContainer({
  datasetData,
  handleGraphView,
  setMakeGraph,
}) {
  if (!datasetData) {
    return <Loading />;
  } else {
    return (
      <div className="flex flex-row sm:px-1 lg:px-2">
        <div className="w-full flex flex-col">
          <DatasetLayout
            datasetData={datasetData}
            handleGraphViewh={handleGraphView}
            setMakeGraph={setMakeGraph}
          />
        </div>
      </div>
    );
  }
}
