import Main from '../../components/Main';
import {useAppContext} from '../AppWrapper';
import {useState, useEffect} from 'react';
import DatasetLayout from '../../components/datasetInfoLayout/DatasetLayout';
import Loading from '../../components/Loading';
import {useRouter} from 'next/router';

export default function DatasetPage() {
  const [makeGraph, setMakeGraph] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const appContext = useAppContext();
  const {datasets} = appContext;

  // Using router to create variable for paramaters
  const router = useRouter();
  const {pid} = router.query;

  useEffect(() => {
    if (datasets) {
      for (let i = 0; i < datasets.length; i++) {
        if (datasets[i].name === pid) {
          console.log('Here it is, displayData pid', datasets[i]);
          setDisplayData(datasets[i]);
        } else {
          ('Not Found');
        }
      }
    }
  }, [router.isReady, datasets]);

  if (!displayData && router.isReady) {
    return <Loading />;
  } else {
    if (!makeGraph) {
      return (
        <div>
          <DatasetLayout displayData={displayData} pid={pid} />
        </div>
      );
    } else {
      return (
        <div className="sm:px-3 lg:px-4">
          <Main datasets={datasets} />
        </div>
      );
    }
  }
}
