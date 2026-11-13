import Layout from '../App';
import Schedule from '../components/Schedule';
import Location from '../components/Location';

const SchedulePage = () => (
  <Layout>
    <Schedule standalone />
    <Location />
  </Layout>
);

export default SchedulePage;
