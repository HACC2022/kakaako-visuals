import Footer from './Footer';
import Navbar from './Navbar';
import Main from './Main';

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
