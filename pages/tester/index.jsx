import {useEffect} from 'react';

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
      <p>Tester</p>
    </>
  );
}
