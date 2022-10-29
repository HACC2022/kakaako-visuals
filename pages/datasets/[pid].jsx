import Main from '../../components/Main';
import {useAppContext} from '../AppWrapper';

export default function DatasetPage() {
  const appContext = useAppContext();
  const {datasets} = appContext;

  return (
    <div className="mx-auto max-w-3/4 sm:px-3 lg:px-4">
      <Main datasets={datasets} />
    </div>
  );
}
