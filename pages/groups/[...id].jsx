import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [groups, setGroups] = useState([]);

  const url = 'https://opendata.hawaii.gov/api/3/action/group_list';
  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.result);
    setGroups(data.result);
  }
  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(groups, 'cat');

  return (
    <>
      <div>
        <h1>HELLO HOME PAGE</h1>
        <ul>
          {groups.map((id) => {
            return (
              <li>
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
