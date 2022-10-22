import {useEffect, useState} from 'react';
import Graph from './Graph';
import Table from './Table';

const link =
  'https://opendata.hawaii.gov/api/3/action/package_show?id=top-50-employers-kauai-county';

// https://opendata.hawaii.gov/datastore/odata3.0/07c9ec56-d4f3-42d9-9bf5-b74044f83f35?$format=json

export default function Main() {
  const [headers, setHeaders] = useState([]);
  const [responseData, setResponseData] = useState();
  const [id, setId] = useState('');

  // const link = `https://opendata.hawaii.gov/api/3/action/package_show?id=${dataset}`;

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.result.resources);

    const id = await data.result.resources[0].id;
    console.log(id);
    const jsonLink = `https://opendata.hawaii.gov/datastore/odata3.0/${id}?$format=json`;

    const res = await fetch(jsonLink);
    const jsonData = await res.json();

    console.log(Object.keys(jsonData.value[0]));
    setHeaders(Object.keys(jsonData.value[0]));
    setResponseData(jsonData.value);
    console.log(responseData, 'response');
  };

  useEffect(() => {
    getData(link);
  }, []);

  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className=" rounded-lg border-4 border-dashed border-gray-200"></div>
        </div>
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className="rounded-lg border-4 border-dashed border-gray-200">
            <Table headers={headers} responseData={responseData} />
          </div>
        </div>
      </div>
    </main>
  );
}
