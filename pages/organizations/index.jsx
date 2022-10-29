import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function OrganizationsIndex() {
  const [organizations, setOrganization] = useState([]);
  const router = useRouter();
  const {oid} = router.query;

  // const url = `https://opendata.hawaii.gov/api/3/action/package_search?fq=tags:${oid}`;
  // async function fetchData(url) {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  //   setOrganization(data.result);
  // }
  // useEffect(() => {
  //   fetchData(url);
  // }, []);

  // console.log(organizations, 'Orgs');

  return (
    <>
      <div>
        <h1>Organizations</h1>
        {/* <ul>
          {organizations.map((id) => {
            return (
              <li>
                <Link href={`/datasets/${id}`}>
                  <a>{id}</a>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </>
  );
}
