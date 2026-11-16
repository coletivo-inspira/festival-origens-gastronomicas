interface Props { items: string[] }

const Marquee = ({ items }: Props) => (
  <div className="overflow-hidden bg-ember py-3 text-ink" aria-label={items.join(', ')}>
    <div className="marquee flex w-max" aria-hidden>
      {[0, 1].map((k) => (
        <ul key={k} className="flex shrink-0 items-center">
          {items.map((t) => (
            <li key={t + k} className="flex items-center whitespace-nowrap font-display text-xl uppercase tracking-wide md:text-2xl">
              <span className="px-5">{t}</span><span aria-hidden>✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
