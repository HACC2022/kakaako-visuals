export default function GraphHeader({datasetData, setMakeGraph}) {
  if (datasetData !== undefined) {
  }
  return (
    <div className="border-b border-gray-200 pb-5 pr-5 sm:flex sm:items-center sm:justify-between">
      <div className="flex-shrink-0 flex">
        <img
          className="mx-auto h-20 w-20 rounded-full"
          src={`https://health.hawaii.gov/wp-content/themes/hic_state_template_parent/images/og-image.jpg`}
          alt="hawaii state crest"
        />
        <h1 className="text-2xl font-bold leading-6 text-gray-900 ml-3 flex items-center ">
          {datasetData.title}
        </h1>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => setMakeGraph(false)}
        >
          {'Info Page'}
        </button>
      </div>
    </div>
  );
}
