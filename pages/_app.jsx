import '../styles/globals.css';
import AppWrapper from './AppWrapper';
import Layout from '../components/Layout';
import Container from '../components/Container';

export default function MyApp({Component, pageProps}) {
  return (
    <AppWrapper>
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </AppWrapper>
  );
}
