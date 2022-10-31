export default function GraphHeader({datasetData, setMakeGraph}) {
  if (datasetData !== undefined) {
  }
  return (
    <div>
      <div className="border-b border-gray-200 pb-5 pr-5 flex justify-between">
        <h1 className="text-xl font-bold leading-6 text-gray-900 ml-3 flex items-center ">
          {datasetData.title}
        </h1>
        <button
          type="button"
          className="inline-flex items-center flex-shrink-0 flex-nowrap rounded-md border border-transparent bg-red-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => setMakeGraph(false)}
        >
          Info Page
        </button>
      </div>
    </div>
  );
}
