import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}) {
  const cat = 'hi this is a cat';
  return (
    <>
      <Navbar />
      <Container cat={cat}>{children}</Container>
      <Footer />
    </>
  );
}
