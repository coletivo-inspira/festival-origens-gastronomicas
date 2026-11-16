import { useNow } from '../lib/phase';

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex-1 border-2 border-cream/30 px-2 py-2 text-center">
    <span className="block font-display text-4xl leading-none tabular-nums md:text-5xl">{String(value).padStart(2, '0')}</span>
    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-gold">{label}</span>
  </div>
);

const Countdown = ({ to }: { to: string }) => {
  const s = Math.floor(Math.max(0, new Date(to).getTime() - useNow()) / 1000);
  return (
    <div role="timer" aria-label="Contagem regressiva para o festival" className="flex max-w-sm gap-2">
      <Cell value={Math.floor(s / 86400)} label="dias" />
      <Cell value={Math.floor((s % 86400) / 3600)} label="horas" />
      <Cell value={Math.floor((s % 3600) / 60)} label="min" />
      <Cell value={s % 60} label="seg" />
    </div>
  );
};

export default Countdown;
