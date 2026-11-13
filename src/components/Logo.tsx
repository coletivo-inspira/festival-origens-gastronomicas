interface Props { className?: string; small?: boolean; priority?: boolean }

/** Brasão oficial do festival (arquivo em alta enviado pelo organizador, fundo removido). */
const Logo = ({ className, small = false, priority = false }: Props) => (
  <img
    src={small ? '/logo-sm.webp' : '/logo.webp'}
    alt="Festival Origens Gastronômicas"
    width={small ? 450 : 900}
    height={small ? 405 : 809}
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
    className={className}
  />
);

export default Logo;
