import {Fragment} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline';

//pages
import Main from '../../components/Main';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export default function DatasetPage() {
  // const router = useRouter();
  // const {pid} = router.query;

  return (
    <>
      <Main />
    </>
  );
}
