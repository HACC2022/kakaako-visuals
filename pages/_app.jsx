import '../styles/globals.css';
import AppWrapper from './AppWrapper';
import Layout from '../components/Layout';

export default function MyApp({Component, pageProps}) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}
