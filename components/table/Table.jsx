import {useState} from 'react';
import TableHeader from './TableHeader';

export default function Table({headers, responseData, pid}) {
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [selectedGraphType, setSelectedGraphType] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState([]);

  function handleSelectedCheckbox(e) {
    const checkedValue = e.target.value;

    console.log(selectedCheckbox);
    setSelectedCheckbox((prevArray) => [...prevArray, checkedValue]);
  }

  if (!responseData) {
    return;
  }
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
          {/* <Graph displayData={responseData} headers={headers}/> */}
          <TableHeader
            pid={pid}
            headers={headers}
            selectedGraphType={selectedGraphType}
            setSelectedGraphType={setSelectedGraphType}
            selectedCheckbox={selectedCheckbox}
            setSelectedCheckbox={setSelectedCheckbox}
            selectedColumn={selectedColumn}
            setSelectedColumn={setSelectedColumn}
          />
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr key={`top tr`}>
                <th
                  key={`top th`}
                  className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left"
                >
                  <label
                    className="sr-only"
                    htmlFor="SelectAll"
                    key={`top label`}
                  >
                    Select All
                  </label>

                  <input
                    className="h-5 w-5 rounded border-gray-200"
                    type="checkbox"
                    id="SelectAll"
                    key={`top input`}
                  />
                </th>
                {/*////////////// TABLE HEADERS /////////////////*/}
                {headers.map((header, index) => {
                  return (
                    <th
                      key={`th ${index}`}
                      className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                    >
                      <div
                        className="flex items-center gap-2"
                        key={`div ${index}`}
                      >
                        {header}

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          key={`svg ${index}`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            key={`path ${index}`}
                          />
                        </svg>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {/*////////////// Iterating through to pull values for table /////////////////*/}
              {responseData.map((el, index) => {
                const values = Object.values(el);
                // console.log(el, 'el');
                for (let i = 0; i < values.length; i++) {
                  return (
                    <tr key={`${values[i]} ${index}`}>
                      <td
                        key={`td ${values[index]} ${index}`}
                        className="sticky inset-y-0 left-0 bg-white px-4 py-2"
                      >
                        <label
                          className="sr-only"
                          htmlFor={`Row ${index}`}
                        ></label>

                        <input
                          className="h-5 w-5 rounded border-gray-200"
                          type="checkbox"
                          id={`Row ${i}`}
                          value={values}
                          onChange={handleSelectedCheckbox}
                          key={`input ${index}`}
                        />
                      </td>
                      {values.map((val, index) => {
                        return (
                          <>
                            <td
                              className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                              key={`val ${index})}`}
                            >
                              {val ? val : 'Not Entered'}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
