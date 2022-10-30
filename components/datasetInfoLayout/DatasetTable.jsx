const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
];

export default function DatasetTable({displayData}) {
  const {author, maintainer, metadata_modified, metadata_created} = displayData;
  // const others = Object.keys(displayData.extras);
  console.log(displayData.extras);

  if (displayData.extras) {
    console.log(Object.values(displayData.extras));
    for (let i = 0; i < displayData.extras.length; i++) {}
  }

  const additionalDataArray = [
    author,
    maintainer,
    metadata_modified,
    metadata_created,
  ];
  console.log(additionalDataArray);

  if (displayData === undefined) {
    return;
  } else {
    return (
      <div className="px-1 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h3 className="text-l font-bold text-gray-900">Additional Info</h3>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Value
                      </th>
                      {/* 
                    Author 
                    Maintainer 
                    Last Updated
                    Created
                    Department agency short name
                    Department/ Agency
                    DIvision name
                    division shortname acronym
                    line of business 
                    state of hawaii data book
                    
                     */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {additionalDataArray.map((keys, index) => {
                      return (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {keys}
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
      </div>
    );
  }
}
