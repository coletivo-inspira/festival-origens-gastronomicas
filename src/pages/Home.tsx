import Layout from '../App';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Schedule from '../components/Schedule';
import Exhibitors from '../components/Exhibitors';
import Location from '../components/Location';
import Editions from '../components/Editions';
import Faq from '../components/Faq';
import Waitlist from '../components/Waitlist';

const Home = () => (
  <Layout>
    <Hero />
    <Schedule />
    <Exhibitors limit={6} />
    <Gallery />
    <About />
    <Location />
    <Editions />
    <Faq />
    <Waitlist />
  </Layout>
);

export default Home;
