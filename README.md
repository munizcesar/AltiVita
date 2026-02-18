# AltiVita - Encontre o Melhor. Vá com Confiança.

> Reviews especializados e guias sobre produtos tech, software e ferramentas SaaS para o mercado brasileiro.

**Site**: https://altivita.com.br  
**Status**: 🔄 Em Desenvolvimento

---

## 🚀 Sobre o AltiVita

AltiVita é o hub de inteligência tecnológica criado especificamente para o mercado brasileiro. Ajudamos você a descobrir os melhores produtos de tecnologia, software e ferramentas SaaS através de reviews honestos, comparações detalhadas e guias de compra especializados - tudo pensado para a realidade do Brasil.

### Nossa Missão

Empoderar brasileiros a fazer escolhas tecnológicas inteligentes, considerando preços locais, disponibilidade, impostos, garantia e formas de pagamento nacionais. Somos o seu parceiro de confiança na jornada tecnológica.

### Diferenciais para o Mercado Brasileiro
- 💰 **Preços em Reais**: Conversões automáticas e comparações de preço no Brasil
- 🇧🇷 **Disponibilidade Local**: Foco em produtos e serviços disponíveis no Brasil
- 📦 **Impostos e Frete**: Considerações sobre taxas de importação e entrega
- 🛡️ **Garantia Nacional**: Informações sobre suporte e garantia no Brasil
- 💳 **Formas de Pagamento**: PIX, boleto e parcelamento sem juros

### Categorias
- 💻 **Produtos Tech**: Notebooks, smartphones, acessórios, smart home
- ☁️ **Ferramentas SaaS**: Produtividade, marketing, desenvolvimento, design
- ⚙️ **Software**: Aplicações desktop e utilitários
- 📚 **Guias**: Guias de compra, tutoriais, comparações
- 🎮 **Games & Entretenimento**: Hardware gaming, streaming, periféricos

---

## 🎨 Nossa Identidade

### Marca AltiVita

**"Alti"** (Alto, Elevado) + **"Vita"** (Vida) = Crescimento através da tecnologia confiável

- **Cores**: Azul Marinho (#0F2A44) para confiança tech premium + Verde GO (#2DBE60) para ação e crescimento
- **Tom**: Profissional, honesto, brasileiro e orientado à ação
- **Valores**: Transparência radical, expertise tech, foco no mercado brasileiro

---

## 🛠️ Stack Tecnológica

- **Framework**: [Astro](https://astro.build/) (SSG)
- **Linguagem**: TypeScript
- **Deploy**: Cloudflare Pages
- **Analytics**: Google Analytics 4
- **CMS**: Decap CMS (baseado em Git)
- **Pagamentos**: Integração com programas de afiliados brasileiros

---

## 📝 Início Rápido

### Pré-requisitos
- Node.js 18+ e npm
- Git

### Instalação

```bash
# Clonar repositório
git clone https://github.com/munizcesar/AltiVita.git
cd AltiVita

# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

O site estará disponível em: http://localhost:4321

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 📚 Documentação

- **[ROADMAP.md](./ROADMAP.md)** - Roadmap completo de desenvolvimento (7 fases)
- **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** - Workflow de criação de conteúdo
- **[BRAZIL_STRATEGY.md](./BRAZIL_STRATEGY.md)** - Estratégia específica para o Brasil
- **[BRANDBOOK.md](./BRANDBOOK.md)** - Identidade visual e guidelines
- **[src/config.ts](./src/config.ts)** - Configuração central do site

---

## 🎯 Fase Atual: Fundação

### ✅ Concluído
- [x] Sistema de configuração central
- [x] Layouts otimizados para SEO
- [x] Páginas legais (LGPD, disclosure compliant)
- [x] Estrutura de categorias
- [x] Homepage e hubs de categorias
- [x] Componentes reutilizáveis
- [x] Adaptação para mercado brasileiro
- [x] Identidade visual própria (Azul Marinho + Verde GO)

### 🔄 Em Progresso
- [ ] Criação de conteúdo inicial (primeiros 10 posts)
- [ ] Configuração Google Analytics
- [ ] Aplicação para programas de afiliados brasileiros
- [ ] Integração com APIs de preço (Zoom, Buscapé)

### 📝 Próximos Passos
1. Obter Measurement ID do Google Analytics
2. Aplicar para Amazon Associates Brasil
3. Cadastro em programas de afiliados nacionais (Lomadee, Awin)
4. Criar conteúdo inicial (mínimo 10 posts)
5. Deploy em produção
6. Configurar domínio altivita.com.br

---

## 💾 Arquitetura do Projeto

```
AltiVita/
├── src/
│   ├── config.ts              # Configuração central
│   ├── layouts/
│   │   └── BaseLayout.astro   # Layout principal com SEO
│   ├── components/
│   │   ├── SEO.astro           # Componente SEO
│   │   ├── GoogleAnalytics.astro
│   │   ├── CategoryCard.astro
│   │   ├── ProductCard.astro
│   │   ├── PriceComparison.astro  # Comparador de preços BR
│   │   └── AffiliateBanner.astro
│   └── pages/
│       ├── index.astro         # Homepage
│       ├── tech/
│       ├── saas/
│       ├── software/
│       ├── guides/
│       ├── sobre.astro
│       ├── contato.astro
│       ├── divulgacao-afiliados.astro
│       ├── privacidade.astro
│       └── termos.astro
├── public/
│   └── robots.txt
├── astro.config.mjs       # Configuração Astro
├── ROADMAP.md             # Plano de desenvolvimento
├── CONTENT-GUIDE.md       # Guia de criação de conteúdo
└── BRAZIL_STRATEGY.md     # Estratégia Brasil
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` (use `.env.example` como template):

```env
# Google Analytics
PUBLIC_GA_ID=G-XXXXXXXXXX

# Amazon Associates Brasil
PUBLIC_AMAZON_TAG=seu-tag-20

# Lomadee (Afiliados BR)
PUBLIC_LOMADEE_TOKEN=

# APIs de Comparação de Preço
PUBLIC_ZOOM_API_KEY=
PUBLIC_BUSCAPE_TOKEN=

# GitHub OAuth (para Decap CMS)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

### Atualizar Configuração

Edite `src/config.ts` para atualizar:
- IDs de Analytics
- Tags de afiliados
- Links de redes sociais
- Informações de contato
- Configurações específicas do Brasil

---

## 💰 Programas de Afiliados

### Integrações Brasileiras Planejadas
- **Amazon Associates Brasil** - Produtos tech e eletrônicos
- **Lomadee (Buscapé)** - Marketplace brasileiro
- **Awin Brasil** - Rede de afiliados
- **Hotmart** - Produtos digitais e cursos
- **Eduzz** - Infoprodutos
- **Monetizze** - Produtos digitais
- **Shopee Afiliados** - E-commerce
- **Mercado Livre** - Marketplace

### Integrações Internacionais
- **PartnerStack** - Ferramentas SaaS
- **Impact.com** - Diversos merchants
- **ShareASale** - Empresas de software
- **CJ Affiliate** - Múltiplas redes

### Compliance
- ✅ Divulgação conforme LGPD
- ✅ Consentimento de cookies
- ✅ Política de privacidade brasileira
- ✅ Disclaimers claros de afiliados
- ✅ Transparência em links patrocinados

---

## 🚀 Deploy

### Cloudflare Pages

1. Conectar repositório GitHub
2. Configurações de build:
   - **Comando de build**: `npm run build`
   - **Diretório de saída**: `/dist`
   - **Diretório raiz**: `/`
3. Adicionar variáveis de ambiente
4. Deploy!

### Domínio Personalizado

Adicionar `altivita.com.br` nas configurações do Cloudflare Pages.

---

## 📝 Criação de Conteúdo

Siga o [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) para:
- Templates de estrutura de conteúdo
- Checklist de otimização SEO
- Boas práticas para links de afiliados
- Requisitos de imagens
- Workflow de publicação
- Diretrizes de português brasileiro

---

## 🇧🇷 Estratégia Brasil

Consulte [BRAZIL_STRATEGY.md](./BRAZIL_STRATEGY.md) para:
- Análise do mercado brasileiro
- Adaptações culturais necessárias
- Parcerias locais
- Estratégias de marketing digital
- Compliance e regulamentação

---

## 🤝 Contribuindo

Atualmente um projeto em desenvolvimento inicial. Contribuições serão bem-vindas no futuro.

### Quer Contribuir?

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📞 Suporte

- Email: contato@altivita.com.br
- GitHub Issues: [Reportar bugs ou sugestões](https://github.com/munizcesar/AltiVita/issues)

---

## 📜 Licença

Licença MIT - Veja o arquivo LICENSE para detalhes.

---

## 🌟 Roadmap Resumido

- **Fase 1**: ✅ Fundação (configuração base, estrutura, legal)
- **Fase 2**: 🔄 Conteúdo Inicial (10 posts piloto)
- **Fase 3**: Analytics e Monetização
- **Fase 4**: Automação e Escala
- **Fase 5**: Recursos Avançados
- **Fase 6**: Comunidade
- **Fase 7**: Expansão

---

## 🎯 Por Que AltiVita?

Em um mercado saturado de reviews genéricos e orientados apenas para o mercado internacional, o **AltiVita** nasceu para preencher uma lacuna crítica: oferecer análises tecnológicas que realmente consideram a realidade do consumidor brasileiro.

### O Que Nos Torna Únicos

- **Radical Transparência**: Mostramos pros E contras sempre, sem esconder limitações
- **Expertise Tech Premium**: Análises profundas com conhecimento técnico real
- **Brasil em Primeiro Lugar**: Cada review considera preço local, impostos, frete, garantia e formas de pagamento brasileiras
- **Orientado à Ação**: Não apenas informamos, ajudamos você a tomar a decisão certa e avançar (GO!)

---

**Construído com ❤️ para o mercado brasileiro**

**🇧🇷 AltiVita - Encontre o Melhor. Vá com Confiança.**
