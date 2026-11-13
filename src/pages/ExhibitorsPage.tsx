import Layout from '../App';
import Exhibitors from '../components/Exhibitors';
import Waitlist from '../components/Waitlist';

const ExhibitorsPage = () => (
  <Layout>
    <Exhibitors standalone />
    <Waitlist />
  </Layout>
);

export default ExhibitorsPage;
