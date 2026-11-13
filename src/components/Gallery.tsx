import { gallery } from '../lib/media';
import Section from './Section';

/** Só aparece quando houver fotos em src/assets/media/gallery/. */
const Gallery = () => {
  if (gallery.length === 0) return null;
  return (
    <Section id="galeria" kicker="Clima do festival" title="Veja como é" tone="coal">
      <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0">
        {gallery.map((src, i) => (
          <li key={src} className="w-[78%] shrink-0 snap-center md:w-auto">
            <img src={src} alt={`Foto do festival ${i + 1}`} loading="lazy" decoding="async" className="aspect-[4/5] w-full border-2 border-cream/30 object-cover md:aspect-square" />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Gallery;
