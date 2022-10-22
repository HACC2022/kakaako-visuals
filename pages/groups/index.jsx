import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function GroupIndex() {
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

  return (
    <>
      <div>
        <h1>HELLO GROUP PAGE</h1>
        <ul>
          {groups.map((group) => {
            return (
              <li key={group}>
                <Link href={`/groups/${group}`}>
                  <a>{group}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
