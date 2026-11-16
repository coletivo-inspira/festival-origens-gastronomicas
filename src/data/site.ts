// Dados permanentes do festival (valem para qualquer edição).

export const site = {
  name: 'Festival Origens Gastronômicas',
  tagline: 'O maior e melhor festival gastronômico de Minas',
  // ⚠️ Confirmar: nº de edições já realizadas (destaques do Instagram vão da 1ª à 10ª).
  editionsHeld: 10,
  about:
    'O Festival Origens Gastronômicas reúne cozinhas de todo tipo, música ao vivo e a família inteira num só lugar. Já passou por Belo Horizonte e Lagoa Santa, sempre com muita gastronomia, fogo e boa música.',
};

export const contacts = {
  instagram: 'https://www.instagram.com/festivalorigensgastronomicasbh/',
  instagramHandle: '@festivalorigensgastronomicasbh',
  threads: 'https://www.threads.net/@festivalorigensgastronomicasbh',
  // ⚠️ A preencher pelo organizador. Enquanto `null`, o botão de WhatsApp fica oculto.
  whatsapp: null as string | null, // formato: '5531999999999'
  email: null as string | null,
};

// Perguntas que valem sempre (as específicas de cada edição ficam no arquivo da edição).
export const generalFaq = [
  { q: 'O que é o Festival Origens Gastronômicas?', a: 'É um festival gastronômico de Minas Gerais que junta muitas estações de comida, música ao vivo e espaço para a família. Já soma {n} edições.' },
  { q: 'Onde as edições acontecem?', a: 'Já aconteceram em {cities}. O local de cada edição é divulgado aqui no site e no Instagram do festival.' },
  { q: 'Como saber da próxima edição?', a: 'Cadastre-se na lista de novidades, no fim desta página, ou siga o Instagram do festival.' },
  { q: 'Como ser expositor ou patrocinador?', a: 'Envie seu interesse pela página "Seja expositor"; a organização entra em contato.' },
] as const;
