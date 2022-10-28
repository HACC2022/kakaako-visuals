import Main from '../../components/Main';
import {useAppContext} from '../AppWrapper';

export default function DatasetPage() {
  const appContext = useAppContext();
  const {datasets} = appContext;

  return (
    <>
      <Main datasets={datasets} />
    </>
  );
}
