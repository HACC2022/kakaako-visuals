import {useEffect} from 'react';
import TableTest from '../../components/table/Table';

export default function Tester() {
  const id = 'percent-enrolled-in-college-by-gender';
  async function testing() {
    const res = await fetch(
      `https://og-production-open-data-shared-ckan-892364687672.s3.amazonaws.com/hawaii/resources/1468373d-20db-4ab7-b0da-00420afa653b/${id}-json.json?Signature=tTiG9FTQQt%2BK4aiCCqAzbDkUf3M%3D&Expires=1666687887&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ`
    );
    // ('https://og-production-open-data-shared-ckan-892364687672.s3.amazonaws.com/hawaii/resources/dce141d8-a7f3-4692-af5f-32d55c48c85b/percent-enrolled-in-college-by-gender-json.json?Signature=9nCFFZf9XdAEgdITeZvjpL3mhjQ%3D&Expires=1666688089&AWSAccessKeyId=AKIAJJIENTAPKHZMIPXQ');
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
