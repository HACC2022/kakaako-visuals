import DatasetMain from '../../components/DatasetMain';
import {useAppContext} from '../AppWrapper';

export default function DatasetsIndex() {
  const appContext = useAppContext();
  const {datasets} = appContext;

  return (
    <div className="basis-1/5">
      <DatasetMain datasets={datasets} />
    </div>
  );
}
