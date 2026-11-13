import Layout from '../App';
import Editions from '../components/Editions';
import Waitlist from '../components/Waitlist';

const EditionsPage = () => (
  <Layout>
    <Editions standalone />
    <Waitlist />
  </Layout>
);

export default EditionsPage;
