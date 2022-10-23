import {useEffect, useState} from 'react';
import Link from 'next/link';
import {thumbnails} from '../../public/groupThumbs';

const groupUrl = 'https://opendata.hawaii.gov/api/3/action/group_list';

export default function GroupsIndex() {
  const [groups, setGroups] = useState([]);
  const [dataset, setDataset] = useState('');

  async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.result);
    setGroups(data.result);
  }
  useEffect(() => {
    fetchData(groupUrl);
  }, []);

  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Group Page
              </h2>
              <p className="text-xl text-gray-300">Hawaii Open Data Groups</p>
            </div>
            <ul
              role="list"
              className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
            >
              {groups.map((group) => (
                <li
                  key={group}
                  className="rounded-lg bg-white py-10 px-6 text-center xl:px-10 xl:text-left"
                >
                  <div className="space-y-6 xl:space-y-10">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                      src={thumbnails[group]}
                      alt={`${group}'s photo`}
                    />
                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <Link href={`/groups/${group}`}>
                          <h3 className="text-indigo-600 text-center">
                            {group}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
