# LGPD — checklist para o organizador

> Este documento é um guia prático, **não é parecer jurídico**. Peça a um advogado ou ao encarregado de dados para revisar a Política de Privacidade e os textos de consentimento antes de publicar.

## O que o site já faz
- Não grava nada sem as caixas de aceite (desmarcadas por padrão): política, maioridade (18+) e, na lista de novidades, o consentimento específico para comunicações.
- Coleta só o necessário: nome e e-mail obrigatórios; telefone opcional.
- Guarda prova do consentimento: data/hora, versão da política, página de origem.
- Cookies: Google Analytics só roda se houver `VITE_GA_ID` **e** o visitante aceitar. Recusar é tão fácil quanto aceitar e dá para mudar depois (rodapé).
- Fontes servidas pelo próprio site (nada é enviado ao Google Fonts).
- Página `/privacidade` com finalidades, bases legais, compartilhamento, prazo, direitos e canal do titular.

## O que precisa ser feito por vocês (fora do código)
1. **Preencher `src/data/legal.ts`:** razão social, CNPJ, endereço e e-mail para pedidos de titulares. O build avisa enquanto estiver incompleto.
2. **Definir o prazo de guarda** (hoje 24 meses sem interação) e cumprir.
3. **Quem acessa a planilha:** poucas pessoas, conta com verificação em duas etapas; remover acesso de quem sair da equipe.
4. **Equipe de marketing = operadora:** formalizar (contrato ou termo) que só usam os dados para as finalidades da política. Se usarem ferramentas de e-mail/WhatsApp, incluí-las na política.
5. **Toda campanha deve ter descadastro** (link ou "responda SAIR") e vocês precisam marcar `status = descadastrado` na planilha e **nunca mais** enviar para quem saiu. Sugestão: confirmar o e-mail (double opt-in) na primeira mensagem.
6. **Atender pedidos de titulares** (acesso, correção, exclusão, revogação) pelo e-mail informado, nos prazos da LGPD.
7. **Plano de incidente:** se a planilha vazar, avisar titulares e a ANPD quando houver risco relevante.
8. **Indicar um encarregado (DPO)** e divulgar o contato (pode ser uma pessoa da empresa).
9. **Mantenha um registro simples das operações** (quais dados, para quê, quem acessa, quanto tempo): serve de prova.
10. Não importe/cole listas de terceiros nem compre contatos para esta base.
11. Fotos de público: tenha autorização/aviso de captação de imagem no evento.
