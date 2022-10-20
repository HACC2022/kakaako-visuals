import {useEffect, useState} from 'react';
import Graph from './Graph';
import Table from './Table';

const link =
  'https://opendata.hawaii.gov/api/3/action/package_show?id=top-50-employers-kauai-county';

// https://opendata.hawaii.gov/datastore/odata3.0/07c9ec56-d4f3-42d9-9bf5-b74044f83f35?$format=json

export default function Main() {
  //
  const [sales, setSales] = useState(0);
  const [companyName, setCompanyNames] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [responseData, setResponseData] = useState();

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.result.resources);

    const id = await data.result.resources[0].id;
    console.log(id);
    const jsonLink = `https://opendata.hawaii.gov/datastore/odata3.0/${id}?$format=json`;

    const res = await fetch(jsonLink);
    const jsonData = await res.json();

    console.log(jsonData);
    // console.log('fields', data.result.fields);

    // setHeaders(
    //   data.result.fields.map((headers) => {
    //     return headers.id;
    //   })
    // );

    // const header = await Object.keys(data.value[0]);
    // console.log(header, 'h');

    // setHeaders(header);
    // setResponseData(data);

    // console.log(responseData, 'response data');

    // const values = Object.values(data.result.records);
    // console.log(values, 'vvv');

    // // console.log(maybe(values), 'aaa');
    // setResponseData(values);

    // setCompanyNames(
    //   await data.result.records.map((name) => {
    //     return name['Name'];
    //   })
    // );
    // setSales(
    //   await data.result.records.map((sale) => {
    //     return Number(sale['Annual Sales']);
    //   })
    // );
    // setResponseData(data.result.records);
  };

  useEffect(() => {
    getData(link);
  }, []);

  // console.log('names', companyName);
  // console.log('sales', sales);
  // console.log('headerss', headers);
  // console.log('response', responseData);

  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className=" rounded-lg border-4 border-dashed border-gray-200">
            <Graph sales={sales} companyName={companyName} />
          </div>
        </div>
        <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
          <div className="rounded-lg border-4 border-dashed border-gray-200">
            <Table headers={headers} />
          </div>
        </div>
      </div>
    </main>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(link);
//   const info = await res.json();

//   return {
//     props: {
//       info,
//     },
//   };
// };
