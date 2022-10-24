import {useState} from 'react';
import Graph from './Graph';

export default function Table({headers, responseData}) {
  const [selectedRow, setSelectedRow] = useState([]);

  if (!responseData) {
    return;
  } else {
    console.log(responseData);
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
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  {/*////////////// TABLE HEADERS /////////////////*/}
                  <tr>
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
                  {/*////////////// Iterating through to pull values for table /////////////////*/}
                  {responseData.map((el) => {
                    const values = Object.values(el);
                    console.log('values', values);
                    for (let i = 0; i < values.length; i++) {
                      return (
                        <tr>
                          {values.map((val) => {
                            return (
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {val ? val : 'Not Entered'}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    }
                    return (
                      <tr>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {val}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
