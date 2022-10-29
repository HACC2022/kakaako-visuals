import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
