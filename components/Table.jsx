import {useLayoutEffect, useRef, useState} from 'react';
import Graph from './Graph';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Table({headers, responseData}) {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  // useLayoutEffect(() => {
  //   const isIndeterminate =
  //     selectedRow.length > 0 && selectedRow.length < responseData.length;
  //   setChecked(selectedRow.length === responseData.length);
  //   setIndeterminate(isIndeterminate);
  //   checkbox.current.indeterminate = isIndeterminate;
  // }, [selectedRow]);

  // function toggleAll() {
  //   setSelectedRow(checked || indeterminate ? [] : responseData);
  //   setChecked(!checked && !indeterminate);
  //   setIndeterminate(false);
  // }

  console.log(headers, 'hhhhhhhh');
  console.log(responseData, 'RD');

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Graph />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Data</h1>
          <p className="mt-2 text-sm text-gray-700">Returned data</p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedRow.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {/* <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th> */}
                    {headers.map((header) => {
                      return (
                        <th
                          key={header}
                          scope="col"
                          className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          {header}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {/* // iterate through response data
                      on every element I want to print the value or the corresponding key to the corrent column */}
                  {/* {responseData.map((el) => {
                    for (let key in el) {
                      return (
                        <tr>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {key}
                          </td>
                        </tr>
                      );
                    }
                  })} */}

                  {/* {responseData.map((response) => (
                    <tr
                      key={response._id}
                      className={
                        selectedRow.includes(response._id)
                          ? 'bg-gray-50'
                          : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedRow.includes(response) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={response.id}
                          checked={selectedRow.includes(response)}
                          onChange={(e) =>
                            setSelectedRow(
                              e.target.checked
                                ? [...selectedRow, response]
                                : selectedRow.filter((p) => p !== response)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedRow.includes(response)
                            ? 'text-indigo-600'
                            : 'text-gray-900'
                        )}
                      >
                        {response}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {response}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {response}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {response}
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
