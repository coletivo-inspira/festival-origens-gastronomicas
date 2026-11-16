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
import { withExhibitors, withSchedule } from '../lib/editions';
import { useSite } from '../lib/phase';

/** A Home muda sozinha: edição a caminho/acontecendo (programação, expositores, local) ou site institucional pós-evento. */
const Home = () => {
  const s = useSite();
  const e = s.edition;

  if (e) {
    return (
      <Layout>
        <Hero />
        {e.schedule?.length ? <Schedule edition={e} moreHref="/programacao" /> : null}
        {e.exhibitors?.length ? <Exhibitors edition={e} limit={6} moreHref="/expositores" /> : null}
        <Gallery />
        <About />
        <Location edition={e} />
        <Editions />
        <Faq />
        <Waitlist />
      </Layout>
    );
  }

  const sched = withSchedule(s);
  const ex = withExhibitors(s);
  return (
    <Layout>
      <Hero />
      <About />
      {s.featured && <Gallery editionId={s.featured.id} title="Como foi" />}
      {sched && <Schedule edition={sched} archive moreHref={`/edicoes/${sched.id}`} />}
      {ex && <Exhibitors edition={ex} archive limit={6} moreHref="/expositores" />}
      <Editions />
      <Faq />
      <Waitlist />
    </Layout>
  );
};

export default Home;
