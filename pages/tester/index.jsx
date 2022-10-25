import {useEffect} from 'react';
import TableTest from '../../components/table/Table';

export default function Tester() {
  async function testing() {
    const res = await fetch(
      'https://opendata.hawaii.gov/api/3/action/package_search?q=community'
    );
    const data = await res.json();
    console.log(data);
  }

  useEffect(() => {
    testing();
  });
  return (
    <>
      <TableTest />
    </>
  );
}
