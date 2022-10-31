import '../styles/globals.css';
import AppWrapper from './AppWrapper';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

export default function MyApp({Component, pageProps}) {
  return (
    <AppWrapper>
      <Layout>
        <div className="flex flex-row mx-auto max-w-7xl sm:px-2 lg:px-4">
          <div className="w-1/5 flex-0">
            <Sidebar />
          </div>
          <div className="w-4/5  ">
            <Component {...pageProps} />
          </div>
        </div>
      </Layout>
    </AppWrapper>
  );
}
