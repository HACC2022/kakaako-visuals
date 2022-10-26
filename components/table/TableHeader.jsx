import RadioGroup from './RadioGroups';
import Dropdown from './Dropdown';
import TestGraph from '../charts/TestGraph';

export default function TableHeader({
  pid,
  headers,
  selectedGraphType,
  setSelectedGraphType,
  selectedCheckbox,
  setSelectedCheckbox,
  selectedColumn,
  setSelectedColumn,
}) {
  return (
    <>
      {/* <TestGraph
        selectedGraphType={selectedGraphType}
        setSelectedGraphType={setSelectedGraphType}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        selectedCheckbox={selectedCheckbox}
        setSelectedCheckbox={setSelectedCheckbox}
      /> */}
      <div className="md:flex md:items-center md:justify-between py-10">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {pid}
          </h2>
          {/* <RadioGroup
            selectedGraphType={selectedGraphType}
            setSelectedGraphType={setSelectedGraphType}
          /> */}
        </div>
        <div className="min-w-0 flex-1">
          {/* <Dropdown
            headers={headers}
            selectedColumn={selectedColumn}
            setSelectedColumn={setSelectedColumn}
          /> */}
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
