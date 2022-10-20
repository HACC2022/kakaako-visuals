import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function Datasets() {
  const [datasets, setDatasets] = useState([]);

  const url = 'https://opendata.hawaii.gov/api/3/action/package_list';
  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setDatasets(data.result);
  }
  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(datasets, 'cat');

  return (
    <>
      <div>
        <h1>All Datasets</h1>
        <ul>
          {datasets.map((set) => {
            return (
              <li>
                <Link href={`/datasets/${set}`}>
                  <a>{set}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
