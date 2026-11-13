import Layout from '../App';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import { event } from '../data/event';

const BecomeExhibitor = () => (
  <Layout>
    <Section kicker="Para marcas e cozinhas" title="Seja expositor ou patrocinador" intro={`Leve sua cozinha ou marca para um festival com mais de ${event.stations} estações gastronômicas e entrada gratuita. Conte sobre você e entraremos em contato.`} className="pt-28 md:pt-36">
      <div className="max-w-xl">
        <ContactForm
          consent="contact"
          kind="expositor"
          fields={[
            { name: 'nome', label: 'Seu nome', required: true, autoComplete: 'name' },
            { name: 'empresa', label: 'Empresa / marca', required: true, autoComplete: 'organization' },
            { name: 'email', label: 'E-mail', type: 'email', required: true, autoComplete: 'email' },
            { name: 'telefone', label: 'WhatsApp / telefone', type: 'tel', autoComplete: 'tel', placeholder: '(31) 99999-9999' },
            { name: 'interesse', label: 'Interesse (expositor, patrocínio, imprensa…)' },
            { name: 'mensagem', label: 'Mensagem', textarea: true },
          ]}
          submitLabel="Enviar interesse"
          successMessage="Recebemos seu contato. Em breve a organização responde."
          fallbackMessage="Olá! Tenho interesse em ser expositor/patrocinador do Festival Origens Gastronômicas."
        />
      </div>
    </Section>
  </Layout>
);

export default BecomeExhibitor;
