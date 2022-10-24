import {useEffect, useState} from 'react';
import Table from './Table';
import {useRouter} from 'next/router';

export default function Main() {
  const [headers, setHeaders] = useState([]);
  const [responseData, setResponseData] = useState();

  //using router to create variable for paramaters
  const router = useRouter();
  const {pid} = router.query;

  console.log(pid, 'main');
  const link = `https://opendata.hawaii.gov/api/3/action/package_show?id=${pid}`;

  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();

        // function to filter the results for which contains CSV. Order is not always the same in formats returned.
        const filterCSV = await data.result.resources.filter((el) => {
          if (el.format === 'CSV') {
            return el.id;
          }
          return;
        });
        console.log(filterCSV[0].id, 'returned ID');

        // variable to store the paramaters ID
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

// // import {Graph} from './Graph';
// // import Table from './Table';
// // import {useEffect, useState} from 'react';
// // // import GraphMenu from './graphMenu/GraphMenu';

// // export default function Main({id}) {
// //   //fetching the database ID
// //   const fetchLink =`https://opendata.hawaii.gov/api/3/action/package_show?id=${id}`
// //   const [mainData, setMainData] = useState([]);

// //   const getData = async (url) => {
// //     const getJSONLink = await fetch(url);
// //     const JSONLinkResponse = await getJSONLink.json();

// //     //fetching the actual data based on the database ID that came back from the first request.
// //     const dataQuery = await fetch(`https://opendata.hawaii.gov/datastore/odata3.0/${JSONLinkResponse.result.resources[0].id}?$format=json`)
// //     const graphData = await dataQuery.json();
// //     setMainData(graphData.value);
// //   };
// //   console.log(mainData)

// //   useEffect(() => {
// //     getData(fetchLink);
// //   }, []);

// //   return (
// //     <main className="-mt-32">
// //       <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
// //         <Graph displayData={mainData} />
// //       </div>
// //     </main>
// //   );
// // }
