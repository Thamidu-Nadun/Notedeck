import Demo from './Demo/Demo';
import Faq from './FAQ/FAQ';
import Feature from './Feature/Feature';
import Hero from './Hero/Hero';
import Pricing from './Pricing/Pricing';
import Testimonials from './Testimonials/Testimonials';
import './Home.css';
import MainLayout from '../../layout/MainLayout';
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Demo />
      <Feature />
      <Pricing />
      <Testimonials />
      <Faq />
    </MainLayout>
  );
};

export default Home;
