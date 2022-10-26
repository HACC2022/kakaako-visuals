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


  function titleEdit(rawText) {
    return rawText.split('-').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
   }

// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myFunction(this);
//     }
// };
// xhttp.open("GET", "https://opendata.hawaii.gov/datastore/odata3.0/caf4dc69-cf11-43dc-b4f9-3c29156d7630", true);
// xhttp.send();

// function myFunction(xml) {
//     const xmlDoc = xml.responseXML;
//     const x = xmlDoc.getElementsByTagName("title");
//     document.getElementById("demo").innerHTML =
//     x[0].childNodes[0].nodeValue;
// }

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
                  <a>{titleEdit(set)}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
