import { usePhase } from '../lib/phase';
import ContactForm from './ContactForm';
import Section from './Section';

const Waitlist = () => {
  const after = usePhase() === 'after';
  return (
    <Section id="avise-me" kicker={after ? 'Próxima edição' : 'Fique por dentro'} title={after ? 'Quer saber da próxima?' : 'Receba as novidades'} tone="flame" intro="Deixe seu contato e avisamos quando houver nova edição, novos expositores e atrações.">
      <div className="max-w-xl"><ContactForm consent="newsletter" kind="lista-de-espera"
        fields={[
          { name: 'nome', label: 'Seu nome', required: true, autoComplete: 'name' },
          { name: 'email', label: 'E-mail', type: 'email', required: true, autoComplete: 'email' },
          { name: 'telefone', label: 'WhatsApp / telefone', type: 'tel', autoComplete: 'tel', placeholder: '(31) 99999-9999' },
        ]}
        submitLabel="Quero ser avisado" successMessage="Pronto! Você receberá as novidades do festival."
        fallbackMessage="Olá! Quero ser avisado sobre as próximas edições do Festival Origens Gastronômicas." /></div>
    </Section>
  );
};

export default Waitlist;
