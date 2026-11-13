import type { ReactNode } from 'react';
import Layout from '../App';
import { analyticsConfigured } from '../lib/analytics';
import { legal } from '../data/legal';
import { event, contacts } from '../data/event';
import { openCookiePrefs } from '../lib/consent';

const H = ({ children }: { children: ReactNode }) => <h2 className="mb-3 mt-10 text-3xl leading-none text-gold md:text-4xl">{children}</h2>;
const P = ({ children }: { children: ReactNode }) => <p className="mb-3 leading-relaxed text-cream/85">{children}</p>;
const Li = ({ children }: { children: ReactNode }) => <li className="ml-5 list-disc leading-relaxed text-cream/85">{children}</li>;

const PrivacyPage = () => {
  const c = legal.controller;
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
        <h1 className="text-[clamp(2.75rem,10vw,5rem)] leading-[0.9]">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-cream/60">Versão {legal.policyVersion} · atualizada em {legal.updatedAt}</p>

        <H>1. Quem é o responsável pelos seus dados</H>
        <P>O responsável (controlador) pelos dados tratados neste site é <strong>{c.name}</strong>, CNPJ {c.cnpj}, com endereço em {c.address}, organizador do {event.name}.</P>
        <P>Para qualquer assunto sobre seus dados pessoais, escreva para <strong>{c.privacyEmail}</strong>.</P>

        <H>2. Quais dados coletamos</H>
        <ul className="mb-3 space-y-2">
          <Li><strong>Lista de novidades:</strong> nome, e-mail e, se você quiser informar, telefone/WhatsApp. Também guardamos a data e hora do aceite, a versão desta política, a página de origem e a confirmação de que você declarou ter 18 anos ou mais.</Li>
          <Li><strong>Contato de expositores, patrocinadores e imprensa:</strong> nome, empresa, e-mail, telefone (opcional), interesse e a mensagem que você escrever.</Li>
          {analyticsConfigured && <Li><strong>Dados de navegação (somente se você aceitar os cookies de medição):</strong> páginas visitadas, tipo de dispositivo e navegador, localização aproximada e identificadores de cookie do Google Analytics.</Li>}
        </ul>
        <P>Não coletamos dados pessoais sensíveis nem pedimos informações além do necessário para as finalidades abaixo.</P>

        <H>3. Para que usamos e em que base legal</H>
        <ul className="mb-3 space-y-2">
          <Li><strong>Enviar comunicações sobre o festival</strong> (novidades, atrações, expositores, ingressos e próximas edições) por e-mail e/ou WhatsApp. Base legal: seu <strong>consentimento</strong> (art. 7º, I, da LGPD).</Li>
          <Li><strong>Responder a contatos comerciais</strong> de expositores, patrocinadores e imprensa. Base legal: procedimentos preliminares a contrato, a pedido do titular (art. 7º, V).</Li>
          {analyticsConfigured && <Li><strong>Medir o uso do site e melhorá-lo.</strong> Base legal: seu <strong>consentimento</strong> ao aceitar os cookies de medição.</Li>}
        </ul>
        <P>Não vendemos seus dados e não os usamos para outras finalidades sem pedir novo consentimento.</P>

        <H>4. Com quem compartilhamos</H>
        <ul className="mb-3 space-y-2">
          <Li><strong>Google (Planilhas e Apps Script):</strong> onde os formulários ficam armazenados. A Google atua como operadora e pode manter servidores fora do Brasil, o que caracteriza transferência internacional de dados (art. 33 da LGPD), com as garantias previstas pela própria Google.</Li>
          <Li><strong>Equipe de comunicação/marketing do festival:</strong> pessoas ou empresas contratadas pelo organizador que enviam as comunicações, obrigadas a usar os dados só para essas finalidades.</Li>
          {analyticsConfigured && <Li><strong>Google Analytics:</strong> apenas se você aceitar os cookies de medição.</Li>}
          <Li><strong>Autoridades</strong>, quando exigido por lei.</Li>
        </ul>

        <H>5. Por quanto tempo guardamos</H>
        <P>Mantemos os dados da lista de novidades até você retirar o consentimento ou por até {legal.retentionMonths} meses sem interação, o que ocorrer primeiro. Contatos comerciais são mantidos pelo tempo necessário para tratar a proposta e cumprir obrigações legais.</P>

        <H>6. Seus direitos</H>
        <P>Pela LGPD (art. 18), você pode, a qualquer momento: confirmar se tratamos seus dados; acessar, corrigir ou pedir a portabilidade deles; pedir a anonimização, o bloqueio ou a eliminação; saber com quem compartilhamos; e <strong>revogar o consentimento</strong>. Basta escrever para {c.privacyEmail}. Responderemos nos prazos previstos em lei. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).</P>
        <P>Para <strong>deixar de receber comunicações</strong>, responda pedindo o cancelamento ou use o link de descadastro presente nas mensagens.</P>

        <H>7. Cookies e tecnologias</H>
        {analyticsConfigured ? (
          <>
            <P>Usamos apenas cookies de medição do Google Analytics, e somente depois do seu aceite. Não usamos cookies de publicidade. As fontes do site são servidas por nós, sem consultar terceiros.</P>
            <button onClick={openCookiePrefs} className="mb-3 border-2 border-cream px-4 py-2 font-display text-lg uppercase tracking-wide hover:bg-cream hover:text-ink">Alterar minha preferência de cookies</button>
          </>
        ) : (
          <P>Este site não usa cookies de medição nem de publicidade. As fontes são servidas por nós, sem consultar terceiros. Guardamos no seu navegador apenas dados técnicos necessários ao funcionamento.</P>
        )}
        <P>Ao clicar em links para Instagram, Google Maps, Waze ou o site do hotel parceiro, você passa a estar sujeito às políticas desses serviços.</P>

        <H>8. Segurança</H>
        <P>Adotamos medidas razoáveis para proteger os dados: acesso restrito à planilha, conexão segura (HTTPS) e uso dos dados apenas por quem precisa deles. Em caso de incidente com risco relevante, comunicaremos os titulares e a ANPD conforme a lei.</P>

        <H>9. Crianças e adolescentes</H>
        <P>Os formulários deste site são destinados a maiores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes. Se identificarmos um cadastro nessa condição, ele será eliminado.</P>

        <H>10. Alterações</H>
        <P>Podemos atualizar esta política. A data e a versão no topo indicam a última revisão. Mudanças que exijam novo consentimento serão informadas.</P>

        <H>11. Fale com a gente</H>
        <P>Dúvidas sobre esta política: {c.privacyEmail}. Perfil oficial: <a href={contacts.instagram} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">{contacts.instagramHandle}</a>.</P>
      </article>
    </Layout>
  );
};

export default PrivacyPage;
