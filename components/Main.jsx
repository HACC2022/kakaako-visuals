import {useEffect, useState} from 'react';
import Graph from './Graph';
import Table from './Table';

const link =
  'https://opendata.hawaii.gov/api/3/action/datastore_search?resource_id=07c9ec56-d4f3-42d9-9bf5-b74044f83f35&limit=6';

export default function Main() {
  const [sales, setSales] = useState(0);
  const [companyName, setCompanyNames] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [responseData, setResponseData] = useState();

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log('fields', data.result.fields);

    setResponseData(data.result.records);
    setHeaders(
      data.result.fields.map((headers) => {
        return headers.id;
      })
    );
    setCompanyNames(
      data.result.records.map((name) => {
        return name['Name'];
      })
    );
    setSales(
      data.result.records.map((sale) => {
        return Number(sale['Annual Sales']);
      })
    );
  };

  useEffect(() => {
    getData(link);
  }, []);

  // console.log('names', companyName);
  // console.log('sales', sales);
  console.log('headerss', headers);
  console.log('response', responseData);

  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* <Graph sales={sales} companyName={companyName} /> */}
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className=" rounded-lg border-4 border-dashed border-gray-200">
            <Graph sales={sales} companyName={companyName} />
          </div>
        </div>
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className="rounded-lg border-4 border-dashed border-gray-200">
            <Table responseData={responseData} headers={headers} />
          </div>
        </div>
      </div>
    </main>
  );
}
