import { Link, useParams } from 'react-router-dom';
import { MapPin, Navigation } from 'lucide-react';
import Layout from '../App';
import Exhibitors from '../components/Exhibitors';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Schedule from '../components/Schedule';
import Waitlist from '../components/Waitlist';
import { editionStatus, findEdition, locationLine, mapsUrlFor } from '../lib/editions';
import { formatRange, year } from '../lib/format';
import { useSite } from '../lib/phase';
import NotFound from './NotFound';

/** Página de uma edição (/edicoes/<id>): serve de retrospectiva ou de página da próxima edição. */
const EditionPage = () => {
  const { id = '' } = useParams();
  const { now } = useSite();
  const e = findEdition(id);
  if (!e) return <NotFound />;
  const status = editionStatus(e, now);
  const past = status === 'Encerrada';

  return (
    <Layout>
      <section className="bg-coal pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Link to="/edicoes" className="text-sm font-semibold text-gold underline underline-offset-4">← Todas as edições</Link>
          <p className="mt-6 inline-block bg-ember px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ink">{status}</p>
          <h1 className="mt-3 text-[clamp(2.75rem,11vw,6.5rem)] leading-[0.88]">{e.title}</h1>
          <p className="mt-4 font-display text-3xl text-gold md:text-4xl">{formatRange(e.start, e.end)} de {year(e.start)}</p>
          <p className="mt-3 flex items-center gap-2 text-lg"><MapPin size={18} className="text-ember" />{e.venue.name} · {locationLine(e)}</p>
          {e.free && <p className="mt-3 inline-block border-2 border-cream/40 px-3 py-1 text-sm font-semibold uppercase tracking-wider">Entrada gratuita</p>}
          {e.summary && <p className="mt-5 max-w-2xl text-lg text-cream/80">{e.summary}</p>}
          {!past && (
            <a href={mapsUrlFor(e)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex h-14 items-center gap-2 border-2 border-gold px-6 font-display text-xl uppercase tracking-wide text-gold hover:bg-gold hover:text-ink"><Navigation size={20} /> Ir para o local</a>
          )}
        </div>
      </section>
      {e.schedule?.length ? <Schedule edition={e} archive={past} /> : null}
      {e.exhibitors?.length ? <Exhibitors edition={e} archive={past} /> : null}
      <Gallery editionId={e.id} title="Fotos da edição" />
      {!past && <Location edition={e} />}
      <Waitlist />
    </Layout>
  );
};

export default EditionPage;
