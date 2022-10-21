import {Graph} from './Graph';
import Table from './Table';
import Dropdown from './Dropdown';

export default function Main() {
  return (
    <main className="-mt-32">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <Dropdown />
        <Graph />
        {/* /End replace */}
      </div>
    </main>
  );
}
