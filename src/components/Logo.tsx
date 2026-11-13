interface Props { className?: string; small?: boolean; priority?: boolean }

/** Brasão oficial do festival (extraído do Instagram). Troque public/logo.webp pelo arquivo original em alta quando tiver. */
const Logo = ({ className, small = false, priority = false }: Props) => (
  <img
    src={small ? '/logo-sm.webp' : '/logo.webp'}
    alt="Festival Origens Gastronômicas"
    width={small ? 348 : 696}
    height={small ? 274 : 548}
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
    className={className}
  />
);

export default Logo;
