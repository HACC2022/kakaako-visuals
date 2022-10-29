import Main from '../../components/Main';
import {useAppContext} from '../AppWrapper';
import {useState} from 'react';
import DatasetLayout from '../../components/datasetInfoLayout/DatasetLayout';

export default function DatasetPage() {
  const [makeGraph, setMakeGraph] = useState(false);
  const appContext = useAppContext();
  const {datasets} = appContext;

  if (makeGraph) {
    return (
      <div>
        <DatasetLayout />
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
