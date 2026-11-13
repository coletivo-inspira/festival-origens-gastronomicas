import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { consentText, legal } from '../data/legal';
import { fallbackContactUrl, hasFormEndpoint, submitForm } from '../lib/forms';
import { trackEvent } from '../lib/analytics';

export interface Field {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  textarea?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

interface Props {
  kind: 'lista-de-espera' | 'expositor';
  fields: Field[];
  submitLabel: string;
  successMessage: string;
  fallbackMessage: string;
  /** 'newsletter' = consentimento para comunicações; 'contact' = só retorno do contato comercial */
  consent: 'newsletter' | 'contact';
}

const input = 'h-14 w-full border-2 border-cream bg-coal px-4 text-base text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none';

const ContactForm = ({ kind, fields, submitLabel, successMessage, fallbackMessage, consent }: Props) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (raw.website) return; // honeypot anti-spam
    trackEvent(`form_${kind}`);

    if (!hasFormEndpoint) {
      const text = `${fallbackMessage}\n` + fields.filter((f) => raw[f.name]).map((f) => `${f.label}: ${raw[f.name]}`).join('\n');
      window.open(fallbackContactUrl(text), '_blank', 'noopener,noreferrer');
      return;
    }

    setStatus('sending');
    const ok = await submitForm({
      tipo: kind,
      nome: raw.nome ?? '',
      email: raw.email ?? '',
      telefone: raw.telefone ?? '',
      empresa: raw.empresa ?? '',
      interesse: raw.interesse ?? '',
      mensagem: raw.mensagem ?? '',
      aceite_comunicacoes: consent === 'newsletter' && raw.aceite_comunicacoes ? 'sim' : 'nao',
      aceite_politica: raw.aceite_politica ? 'sim' : 'nao',
      maior_18: raw.maior_18 ? 'sim' : 'nao',
      versao_politica: legal.policyVersion,
      origem: window.location.pathname,
      website: '',
    });
    setStatus(ok ? 'ok' : 'error');
    if (ok) form.reset();
  };

  if (status === 'ok') return <p role="status" className="border-2 border-cream bg-coal p-5 text-lg font-semibold">{successMessage}</p>;

  const checkbox = 'mt-1 h-6 w-6 shrink-0 accent-[var(--color-ember)]';

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="mb-1 block text-sm font-semibold">{f.label}{f.required ? ' *' : ' (opcional)'}</span>
          {f.textarea
            ? <textarea name={f.name} required={f.required} rows={4} maxLength={1000} className={input + ' h-auto py-3'} />
            : <input name={f.name} type={f.type ?? 'text'} required={f.required} maxLength={200} autoComplete={f.autoComplete} placeholder={f.placeholder} inputMode={f.type === 'tel' ? 'tel' : undefined} className={input} />}
        </label>
      ))}

      {/* Consentimentos: caixas desmarcadas por padrão, texto específico para cada finalidade */}
      <div className="space-y-3 border-2 border-cream/40 p-4 text-sm leading-snug">
        {consent === 'newsletter'
          ? (
            <label className="flex gap-3">
              <input type="checkbox" name="aceite_comunicacoes" required className={checkbox} />
              <span>{consentText.newsletter}</span>
            </label>
          )
          : <p>{consentText.contact}</p>}
        <label className="flex gap-3">
          <input type="checkbox" name="aceite_politica" required className={checkbox} />
          <span>Li e concordo com a <Link to="/privacidade" target="_blank" className="font-semibold underline underline-offset-2">Política de Privacidade</Link>.</span>
        </label>
        <label className="flex gap-3">
          <input type="checkbox" name="maior_18" required className={checkbox} />
          <span>{consentText.adult}</span>
        </label>
      </div>

      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button disabled={status === 'sending'} className="h-14 w-full bg-ember font-display text-xl uppercase tracking-wide text-ink transition active:translate-y-0.5 hover:bg-gold disabled:opacity-60 sm:w-auto sm:px-10">
        {status === 'sending' ? 'Enviando…' : submitLabel}
      </button>
      {!hasFormEndpoint && <p className="text-xs text-cream/70">Ao enviar, abriremos o contato oficial do festival com sua mensagem pronta (nada é gravado neste site).</p>}
      {status === 'error' && <p role="alert" className="text-sm font-semibold">Não foi possível enviar agora. Tente novamente ou fale pelo Instagram.</p>}
    </form>
  );
};

export default ContactForm;
