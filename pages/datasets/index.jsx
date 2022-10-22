import {useEffect, useState, useRef} from 'react';
import Link from 'next/link';

export default function DatasetsIndex() {
  const dataRef = useRef('');
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

  return (
    <nav className="h-full overflow-y-auto" aria-label="Directory">
      <ul>
        {datasets.map((set) => {
          return (
            <li key={set}>
              <Link href={`/datasets/${set}`}>
                <a>{set}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
