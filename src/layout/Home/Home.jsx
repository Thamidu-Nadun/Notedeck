import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import About from './About/About';
import Demo from './Demo/Demo';
import Faq from './FAQ/FAQ';
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';
import Pricing from './Pricing/Pricing';
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
  return (
    <div className="w-screen absolute bg-black">
      <Navbar nav_brand={<h2>Notedeck</h2>} />
      <Hero />
      <Demo />
      <Feature />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
