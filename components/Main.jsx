import {useEffect, useState} from 'react';
import Table from './table/Table';
import {useRouter} from 'next/router';
import Graph from './charts/Graph';

export default function Main() {
  // Where all headers are stored
  const [headers, setHeaders] = useState([]);

  // Storing all returned query data
  const [responseData, setResponseData] = useState([]);

  // Using router to create variable for paramaters
  const router = useRouter();
  const {pid} = router.query;

  const link = `https://opendata.hawaii.gov/api/3/action/package_show?id=${pid}`;

  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();

        // function to filter the results for which contains CSV. Order is not always the same in formats returned.
        console.log(data.result.resources);
        const filterCSV = await data.result.resources.filter((el) => {
          if (el.format === 'CSV') {
            return el.id;
          }
          return;
        });

        // Variable to store the paramaters ID
        const id = filterCSV[0].id;

        const jsonLink = `https://opendata.hawaii.gov/datastore/odata3.0/${id}?$format=json`;
        const res = await fetch(jsonLink);
        const jsonData = await res.json();

        setHeaders(Object.keys(jsonData.value[0]));
        setResponseData(jsonData.value);
      }

      fetchData(link);
    }
  }, [router.isReady]);

  return (
    <main className="">
      {/* <div className="mx-auto max-w-7xl px-2 pb-12 sm:px-2 lg:px-2 "> */}
      {/* <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className=" rounded-lg border-4 border-dashed border-gray-200">
           
          </div>
        </div> */}
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className="rounded-lg border-4 border-dashed border-gray-200">
          <Table headers={headers} responseData={responseData} pid={pid} />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
