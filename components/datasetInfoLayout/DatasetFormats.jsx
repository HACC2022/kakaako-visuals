import Loading from '../Loading';

export default function DatasetFormats({displayData}) {
  const {resources} = displayData;
  console.log(resources, 'RESOURCES');
  if (resources === undefined) {
    return <Loading />;
  } else {
    return (
      <ul
        role="list"
        className="divide-y border-y border-gray-300 rounded divide-gray-200 px-8"
      >
        {resources.map(({format, url}) => (
          <div className="flex justify-between">
            <li key={url} className="px-4 py-4 sm:px-0">
              {format}
            </li>
            <div className=" my-2">
              {/* <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Share
              </button> */}
              <button
                type="button"
                className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <a href={url}>Download</a>
              </button>
            </div>
          </div>
        ))}
      </ul>
    );
  }
}
