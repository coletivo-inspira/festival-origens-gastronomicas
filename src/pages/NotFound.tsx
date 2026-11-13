import { Link } from 'react-router-dom';
import Layout from '../App';

const NotFound = () => (
  <Layout>
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-9xl text-ember">404</p>
      <h1 className="mt-2 text-4xl">Essa página esfriou</h1>
      <Link to="/" className="mt-8 bg-ember px-8 py-4 font-display text-xl uppercase tracking-wide text-ink transition hover:bg-gold">Voltar ao início</Link>
    </section>
  </Layout>
);

export default NotFound;
