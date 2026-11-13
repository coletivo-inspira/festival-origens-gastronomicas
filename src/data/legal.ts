// ⚠️ PREENCHER com os dados reais do organizador (controlador dos dados) antes de publicar.
// O build avisa no terminal enquanto houver campos entre colchetes.
export const legal = {
  policyVersion: '1.0',
  updatedAt: '13 de novembro de 2026',
  controller: {
    name: '[RAZÃO SOCIAL DO ORGANIZADOR]',
    cnpj: '[CNPJ]',
    address: '[ENDEREÇO COMPLETO]',
    privacyEmail: '[E-MAIL PARA PEDIDOS SOBRE DADOS PESSOAIS]',
  },
  // Prazo de guarda sugerido: ajuste conforme decisão do organizador/jurídico.
  retentionMonths: 24,
};

export const controllerComplete = !Object.values(legal.controller).some((v) => v.startsWith('['));

// Textos exatos mostrados ao titular no momento do aceite (guardamos a versão junto com o contato).
export const consentText = {
  newsletter:
    'Li e concordo com a Política de Privacidade e autorizo o uso do meu nome, e-mail e telefone para receber comunicações do Festival Origens Gastronômicas (novidades, atrações, expositores, ingressos e próximas edições) por e-mail e/ou WhatsApp. Posso retirar este consentimento a qualquer momento.',
  contact:
    'Li a Política de Privacidade e estou ciente de que meus dados serão usados apenas para a organização do festival responder ao meu contato comercial.',
  adult: 'Declaro ter 18 anos ou mais.',
} as const;
