import Sidebar from './Sidebar';

export default function Container({children}) {
  return (
    <div className="mx-auto max-w-10/12 sm:px-1 lg:px-2 flex">
      <Sidebar />
      {children}
    </div>
  );
}
