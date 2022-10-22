import {useEffect, useState} from 'react';
import Link from 'next/link';

const test =
  'https://opendata.hawaii.gov/datastore/odata3.0/20702c43-0d9f-4595-92b7-4a842bd1e25d?$format=json';
async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

export default function GroupID() {
  const [groups, setGroups] = useState([]);

  const url = 'https://opendata.hawaii.gov/api/3/action/group_list';
  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.result);
    setGroups(data.result);
  }
  useEffect(() => {
    fetchData(url);
    fetcher(test);
  }, []);

  return (
    <>
      <div>
        <h1>HELLO HOME PAGE</h1>
        <ul>
          {groups.map((id) => {
            return (
              <li key={id}>
                <Link href={`/datasets/${id}`}>
                  <a>{id}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
