import Layout from '../App';
import Schedule from '../components/Schedule';
import Location from '../components/Location';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';
import { withSchedule } from '../lib/editions';
import { useSite } from '../lib/phase';

const SchedulePage = () => {
  const s = useSite();
  const e = withSchedule(s);
  const archive = !s.edition || s.edition.id !== e?.id;
  return (
    <Layout>
      {e
        ? <Schedule edition={e} archive={archive} standalone />
        : <Section kicker="Programação" title="Em breve" intro="A programação da próxima edição será divulgada aqui. Cadastre-se para ser avisado." className="pt-28 md:pt-36"><span /></Section>}
      {s.edition ? <Location edition={s.edition} /> : <Waitlist />}
    </Layout>
  );
};

export default SchedulePage;
