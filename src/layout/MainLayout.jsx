import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = ({children}) => {
  return (
    <div className="home-page w-screen absolute bg-black">
      <Navbar nav_brand={<h2>Notedeck</h2>} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
