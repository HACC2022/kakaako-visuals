import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function GroupID() {
  const [groups, setGroups] = useState([]);
  const router = useRouter();
  const {gid} = router.query;

  const link = `https://opendata.hawaii.gov/api/3/action/package_search?fq=groups:${gid}`;

  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      async function fetchData(url) {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.result.results);
        setGroups(data.result.results);
      }
      fetchData(link);
    }
  }, [router.isReady]);

  if (!router.isReady) {
    return;
  } else {
    // console.log(groups);
    return (
      <>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {groups
              .map(({title, name}) => (
                <div
                  key={name}
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`/seal.png`}
                      alt="hawaii state crest"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link href={`/datasets/${name}`}>
                      <a className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {title}
                        </p>
                      </a>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, 10)}
          </div>
        </div>
      </>
    );
  }
}

// <ul>
//   {groups.map(({title, name}) => {
//     return (
//       <li key={title} value={title}>
//         <Link href={`/datasets/${name}`}>
//           <a>{title}</a>
//         </Link>
//       </li>
//     );
//   })}
// </ul>
