import DatasetMain from '../../components/DatasetMain';
import {useAppContext} from '../AppWrapper';

export default function DatasetsIndex() {
  const appContext = useAppContext();

  const {datasets} = appContext;
  return (
    <>
      <DatasetMain datasets={datasets} />
    </>
  );
}
