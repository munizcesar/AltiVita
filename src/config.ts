// ============================================
// AltiVita - Configuração do Site
// ============================================
// Arquivo central de configuração para todas as definições do site
// Atualize IDs de afiliados e chaves de API aqui conforme os obtiver

export const SITE_CONFIG = {
  // Informações Básicas do Site
  name: 'AltiVita',
  title: 'AltiVita - Encontre o Melhor. Vá com Confiança.',
  description: 'Soluções Digitais, Produtividade Moderna e Estilo de Vida Tecnológico — curadoria e comparativos para profissionais e empresas no Brasil.',
  url: 'https://altivita.com.br',
  ogImage: '/social/og-altivita-dark.png', // OG padrão (PNG 1200×630). WebP disponível em /social/og-altivita-dark.webp
  
  // Branding
  slogan: 'Encontre o Melhor. Vá com Confiança.',
  tagline: 'Reviews especializados e guias sobre produtos tech, software e SaaS',
  
  // Localização Brasil
  country: 'BR',
  currency: 'BRL',
  currencySymbol: 'R$',
  language: 'pt-BR',
  timezone: 'America/Sao_Paulo',
  
  // Contato & Legal
  contact: {
    email: 'contato@altivita.com.br',
    form: '/contato',
    whatsapp: '', // TODO: Adicionar número comercial se houver
  },
  
  legalEntity: 'Equipe AltiVita',
  foundedYear: 2026,
  
  // SEO & Analytics
  analytics: {
    // Google Analytics 4
    googleAnalyticsId: 'G-5J84J9C65G', // ✅ GA4 configurado!
    googleAdsId: '3771126331',
    
    // TODO: Adicionar outras analytics conforme necessário
    // microsoftClarityId: '',
    // facebookPixelId: '',
    // hotjarId: '',
  },
  
  // Programas de Afiliados
  affiliates: {
    // Amazon Associates Brasil
    amazonBR: {
      tag: 'SEU-TAG-AMAZON-20', // TODO: Adicionar seu Amazon Associate Tag após aprovação
      disclaimer: 'Como Associado Amazon, ganhamos com compras qualificadas.',
      enabled: false, // Ativar após aprovação
    },
    
    // Lomadee (Buscapé Company) - Maior rede de afiliados do Brasil
    lomadee: {
      enabled: false, // Ativar quando se juntar
      sourceId: '', // TODO: Adicionar Source ID após cadastro
      token: '',
    },
    
    // Mercado Livre
    mercadoLivre: {
      enabled: false,
      accessToken: '', // TODO: Adicionar após cadastro no programa
    },
    
    // Shopee Afiliados
    shopee: {
      enabled: false,
      affiliateId: '',
    },
    
    // Awin Brasil
    awin: {
      enabled: false,
      publisherId: '',
    },
    
    // KaBuM! (Hardware e Gaming)
    kabum: {
      enabled: false,
      affiliateId: '',
    },
    
    // Produtos Digitais Brasileiros
    hotmart: {
      enabled: false,
      affiliateId: '',
    },
    
    eduzz: {
      enabled: false,
      publicKey: '',
    },
    
    monetizze: {
      enabled: false,
      code: '',
    },
    
    // Programas Internacionais (SaaS principalmente)
    partnerStack: {
      enabled: false,
      publicKey: '',
    },
    
    impact: {
      enabled: false,
      accountId: '',
    },
    
    shareASale: {
      enabled: false,
      affiliateId: '',
    },
    
    cj: {
      enabled: false,
      websiteId: '',
    },
  },
  
  // APIs de Comparação de Preços (Brasil)
  priceApis: {
    // Zoom (Buscapé)
    zoom: {
      enabled: false,
      apiKey: '', // TODO: Obter chave de API
    },
    
    // Buscapé API direta
    buscape: {
      enabled: false,
      token: '',
    },
  },
  
  // Redes Sociais
  social: {
    instagram: '', // TODO: Adicionar @altivita.br quando criado
    tiktok: '', // TODO: Adicionar @altivita
    youtube: '', // TODO: Adicionar canal quando criado
    twitter: '', // Opcional para o Brasil
    linkedin: '', // Para conteúdo B2B/SaaS
    facebook: '', // Opcional
    pinterest: '', // Bom para imagens de produtos
    whatsapp: '', // Canal de comunicação
  },
  
  // Recursos do Site
  features: {
    newsletter: false, // Ativar quando configurar serviço de email
    comments: false, // Ativar se quiser comentários (Disqus, etc)
    search: true,
    darkMode: true,
    priceComparison: true, // Recurso exclusivo BR
    pixPayment: true, // Destacar opções PIX
    installments: true, // Mostrar parcelamento
  },
  
  // Categorias de Conteúdo
  categories: {
    tech: {
      name: 'Produtos Tech',
      slug: 'tech',
      description: 'Notebooks, smartphones, acessórios e dispositivos smart home',
      icon: '💻',
      keywords: ['notebook', 'celular', 'smartphone', 'fone', 'smartwatch'],
    },
    saas: {
      name: 'Ferramentas SaaS',
      slug: 'saas',
      description: 'Software de produtividade, marketing, desenvolvimento e design',
      icon: '☁️',
      keywords: ['produtividade', 'crm', 'email marketing', 'design', 'desenvolvimento'],
    },
    software: {
      name: 'Software',
      slug: 'software',
      description: 'Aplicações desktop e utilitários',
      icon: '⚙️',
      keywords: ['windows', 'mac', 'linux', 'aplicativo', 'programa'],
    },
    guides: {
      name: 'Guias',
      slug: 'guias',
      description: 'Guias de compra, tutoriais e comparações',
      icon: '📚',
      keywords: ['como escolher', 'guia de compra', 'tutorial', 'comparação'],
    },
    gaming: {
      name: 'Games',
      slug: 'games',
      description: 'Hardware gaming, periféricos e equipamentos para streamers',
      icon: '🎮',
      keywords: ['gamer', 'gaming', 'pc gamer', 'periféricos', 'streaming'],
    },
  },
  
  // Configurações SEO
  seo: {
    twitterCard: 'summary_large_image',
    language: 'pt-BR',
    locale: 'pt_BR',
    
    // Configurações Schema.org
    schema: {
      type: 'WebSite',
      publisher: {
        '@type': 'Organization',
        name: 'AltiVita',
        logo: '/logo-horizontal.png',
        sameAs: [
          // Adicionar URLs de redes sociais quando criadas
        ],
      },
    },
  },
  
  // Datas Importantes Brasil
  importantDates: {
    blackFriday: 'Novembro', // Última sexta de novembro
    cyberMonday: 'Novembro', // Segunda após Black Friday
    diaDoConsumidor: '15 de Março',
    natal: 'Dezembro',
    voltaAsAulas: 'Janeiro/Fevereiro',
  },
  
  // Compliance Brasil
  compliance: {
    lgpd: true, // Lei Geral de Proteção de Dados
    cookieConsent: true,
    affiliateDisclosure: true,
    dpo: { // Data Protection Officer
      email: 'privacidade@altivita.com.br',
    },
  },
};

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

// Gerar link Amazon Brasil
export function getAmazonBRLink(asin: string, tag?: string): string {
  const amazonTag = tag || SITE_CONFIG.affiliates.amazonBR.tag;
  return `https://www.amazon.com.br/dp/${asin}?tag=${amazonTag}`;
}

// Gerar link Mercado Livre
export function getMercadoLivreLink(productId: string): string {
  // TODO: Implementar lógica de link de afiliado do Mercado Livre
  return `https://www.mercadolivre.com.br/p/${productId}`;
}

// Formatar preço em Reais
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}

// Calcular parcelas (brasileiro adora parcelar!)
export function calculateInstallments(
  price: number,
  maxInstallments: number = 12,
  interestFree: number = 10 // Parcelas sem juros
): Array<{ installments: number; value: number; total: number; interestFree: boolean }> {
  const result = [];
  
  for (let i = 1; i <= maxInstallments; i++) {
    const installmentValue = price / i;
    result.push({
      installments: i,
      value: installmentValue,
      total: price,
      interestFree: i <= interestFree,
    });
  }
  
  return result;
}

// Verificar se programa de afiliado está ativo
export function isAffiliateActive(program: keyof typeof SITE_CONFIG.affiliates): boolean {
  const affiliate = SITE_CONFIG.affiliates[program];
  return affiliate && 'enabled' in affiliate ? affiliate.enabled : false;
}

// Adicionar disclaimer de afiliado (LGPD compliance)
export function getAffiliateDisclaimer(program?: string): string {
  const base = '⚠️ Este post contém links de afiliados. Isso significa que podemos receber uma pequena comissão (sem custo adicional para você) se você realizar uma compra através destes links.';
  
  if (program === 'amazonBR') {
    return `${base} ${SITE_CONFIG.affiliates.amazonBR.disclaimer}`;
  }
  
  return base;
}

// Converter USD para BRL (usar API de cotação real em produção)
export function convertUSDtoBRL(usdPrice: number, taxRate: number = 0.92): number {
  // TODO: Integrar com API de cotação real (AwesomeAPI, etc)
  // taxRate é uma taxa de exemplo - obter taxa real da API
  const exchangeRate = 5.00; // Exemplo: 1 USD = 5 BRL
  const importTax = 0.60; // 60% de imposto de importação
  
  return usdPrice * exchangeRate * (1 + importTax);
}

// Helper para gerar URLs limpas
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Gerar meta tags para SEO Brasil
export function generateMetaTags({
  title,
  description,
  image,
  url,
  type = 'article',
}: {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
}) {
  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    canonical: `${SITE_CONFIG.url}${url}`,
    openGraph: {
      type,
      url: `${SITE_CONFIG.url}${url}`,
      title,
      description,
      images: image ? [{ url: image }] : [{ url: SITE_CONFIG.ogImage }],
      locale: 'pt_BR',
      siteName: SITE_CONFIG.name,
    },
  };
}
