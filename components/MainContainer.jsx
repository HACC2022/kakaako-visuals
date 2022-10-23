import {useEffect, useState} from 'react';
import Main from './Main';
import Link from 'next/link';

export default function MainContainer() {
  const [datasets, setDatasets] = useState([]);
  const [id, setId] = useState(undefined);

  const handleSetId = (e) => {
    setId(e.target.value);
  };

  const link = 'https://opendata.hawaii.gov/api/3/action/package_list';
  useEffect(() => {
    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      const allDatasets = data.result;
      setDatasets(allDatasets);
      console.log(allDatasets, 'ALL DATASETS');
    }
    fetchData(link);
  }, []);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {id !== undefined ? (
        <Main id={id} />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {datasets.map((data) => (
            <div
              key={data}
              className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://health.hawaii.gov/wp-content/themes/hic_state_template_parent/images/og-image.jpg`}
                  alt="hawaii state crest"
                />
              </div>
              <div className="min-w-0 flex-1" onClick={() => setId(data)}>
                <Link href={`/datasets/${data}`} passHref>
                  <a className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">{data}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
