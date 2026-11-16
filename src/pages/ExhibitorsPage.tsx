import Layout from '../App';
import Exhibitors from '../components/Exhibitors';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';
import { withExhibitors } from '../lib/editions';
import { useSite } from '../lib/phase';

const ExhibitorsPage = () => {
  const s = useSite();
  const e = withExhibitors(s);
  const archive = !s.edition || s.edition.id !== e?.id;
  return (
    <Layout>
      {e
        ? <Exhibitors edition={e} archive={archive} standalone />
        : <Section kicker="Expositores" title="Em breve" intro="Os expositores da próxima edição serão divulgados aqui." tone="paper" className="pt-28 md:pt-36"><span /></Section>}
      <Waitlist />
    </Layout>
  );
};

export default ExhibitorsPage;
