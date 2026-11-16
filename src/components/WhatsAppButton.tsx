import { FaWhatsapp } from 'react-icons/fa';
import { contacts } from '../data/site';
import { trackEvent } from '../lib/analytics';

// Só aparece quando o número oficial for informado em data/site.ts
const WhatsAppButton = () => {
  if (!contacts.whatsapp) return null;
  return (
    <a href={`https://wa.me/${contacts.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp')} aria-label="Falar no WhatsApp" className="fixed bottom-24 right-4 z-40 flex h-14 w-14 md:bottom-6 md:left-6 md:right-auto items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105">
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
