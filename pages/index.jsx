import {useEffect, useState} from 'react';
import Link from 'next/link';
import {thumbnails} from '../public/groupThumbs';

import Cards from '../components/Cards';

export default function HomePage() {
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
  }, []);

  
function titleEdit(rawText) {
  return rawText.split('-').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(' ');
 }

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Hawaii Open Data
            </h2>
            <p className="text-xl text-gray-300">
              Government that is open and transparent
            </p>
          </div>
          <ul
            role="list"
            className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {groups.map((group) => (
              <li
                key={group.name}
                className="rounded-lg bg-white py-10 px-6 text-center xl:px-10 xl:text-left"
              >
                <div className="space-y-6 xl:space-y-10">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src={thumbnails[group]}
                    alt=""
                  />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-indigo-400">{titleEdit(group)}</h3>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// const people = [
//   {
//     name: 'Whitney Francis',
//     role: 'Copywriter',
//     imageUrl:
//       'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   // More people...
// ];

// const people = [
//   {
//     name: 'Leonard Krasner',
//     role: 'Senior Designer',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   // More people...
// ];
