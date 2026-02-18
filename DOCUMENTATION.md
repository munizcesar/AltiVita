# AltiVita — Documentação Completa

**Versão:** 2.0  
**Última Atualização:** Fevereiro de 2026

---

## 📖 Índice

1. [Começando](#começando)
2. [Estrutura do Site](#estrutura-do-site)
3. [Configuração](#configuração)
4. [Criando Conteúdo](#criando-conteúdo)
5. [Diretrizes de SEO](#diretrizes-de-seo)
6. [Links de Afiliados](#links-de-afiliados)
7. [Deploy](#deploy)
8. [Solução de Problemas](#solução-de-problemas)

---

## 🚀 Começando

### Pré-requisitos
- Node.js 18+ instalado
- Git instalado
- Conta no GitHub
- Editor de código (VS Code recomendado)

### Instalação

```bash
# Clonar repositório
git clone https://github.com/munizcesar/AltiVita.git
cd AltiVita

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em: `http://localhost:4321`

### Comandos de Desenvolvimento

```bash
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Pré-visualizar build de produção
npm run astro        # Executar comandos da CLI Astro
```

---

## 🗂️ Estrutura do Site

```
AltiVita/
├── public/              # Arquivos estáticos
│   ├── admin/           # Painel Decap CMS
│   ├── images/          # Imagens do site
│   └── favicon.ico
│
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas do site (rotas)
│   │   ├── index.astro
│   │   ├── sobre.astro
│   │   ├── contato.astro
│   │   ├── tech/        # Categoria Tech
│   │   ├── saas/        # Categoria SaaS
│   │   ├── software/    # Categoria Software
│   │   ├── guias/       # Categoria Guias
│   │   ├── games/       # Categoria Games
│   │   └── legal/       # Páginas legais (LGPD)
│   │
│   ├── content/         # Conteúdo em Markdown
│   ├── styles/          # Estilos globais
│   └── config.ts        # Configuração central do site
│
├── astro.config.mjs     # Configuração Astro
├── package.json         # Dependências
├── ROADMAP.md           # Roadmap de desenvolvimento
└── README.md            # Documentação principal
```

---

## ⚙️ Configuração

### Arquivo Principal de Configuração: `src/config.ts`

Este é o arquivo de configuração central. Atualize-o com seus dados:

```typescript
export const SITE = {
  name: 'AltiVita',
  url: 'https://altivita.com.br',
  email: 'contato@altivita.com.br', // ATUALIZAR
  // ... mais configurações
};

export const ANALYTICS = {
  measurementId: '', // ADICIONAR SEU ID GA4
};

export const AFFILIATES = {
  amazon: {
    enabled: false, // Definir true quando aprovado
    associateId: '', // ADICIONAR SEU ID AMAZON
  },
  lomadee: {
    enabled: false,
    token: '', // ADICIONAR TOKEN LOMADEE
  },
};
```

### Variáveis de Ambiente

Crie o arquivo `.env` na raiz (use `.env.example` como base):

```env
# GitHub OAuth (para Decap CMS)
GITHUB_CLIENT_ID=seu_client_id
GITHUB_CLIENT_SECRET=seu_client_secret

# Analytics
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Amazon Associates Brasil
AMAZON_ASSOCIATE_ID=altivita-20

# Lomadee (Afiliados BR)
PUBLIC_LOMADEE_TOKEN=

# APIs de Preço
PUBLIC_ZOOM_API_KEY=
PUBLIC_BUSCAPE_TOKEN=
```

---

## ✍️ Criando Conteúdo

### Método 1: Usando o Decap CMS (Mais Fácil)

1. Acesse: `https://altivita.com.br/admin`
2. Faça login com o GitHub
3. Clique em "Novo Post"
4. Preencha os campos
5. Clique em "Publicar"

### Método 2: Criando Arquivos Manualmente

#### Review de Produto

Crie o arquivo: `src/content/posts/nome-produto-review.md`

```markdown
---
title: "Review [Produto] 2026: Vale a Pena Comprar?"
description: "Review detalhado do [Produto] com características, prós, contras e preço no Brasil."
data: 2026-02-17
categoria: tech
tags: [notebooks, review, 2026]
autor: Equipe AltiVita
imagemDestaque: /images/nome-produto.jpg
avaluacao: 4.5
linkAfiliado: https://www.amazon.com.br/...
preco: R$ 3.499
---

## Introdução

Seu conteúdo aqui...

## Principais Características

- Característica 1
- Característica 2

## Prós e Contras

### Prós
- Pro 1
- Pro 2

### Contras
- Contra 1
- Contra 2

## Veredicto Final

Sua conclusão...
```

---

## 🔍 Diretrizes de SEO

### Cada Página Deve Ter:

1. **Tag de Título** (50-60 caracteres)
   - Incluir palavra-chave principal em PT-BR
   - Nome da marca no final
   - Exemplo: "Melhores Notebooks 2026: Top 10 Opções | AltiVita"

2. **Meta Descrição** (150-160 caracteres)
   - Resumo atraente em português
   - Incluir CTA
   - Exemplo: "Descubra os melhores notebooks de 2026. Reviews especializados, comparações e guias de compra para o Brasil. Leia agora!"

3. **Estrutura de URL**
   - Usar hífens, não sublinhados
   - Manter curta e descritiva em PT-BR
   - Incluir palavra-chave principal
   - Bom: `/tech/melhores-notebooks-2026`
   - Ruim: `/p?id=123&cat=tech`

4. **Cabeçalhos (H1-H6)**
   - Um H1 por página (título)
   - H2 para seções principais
   - H3 para subseções
   - Incluir palavras-chave naturalmente

5. **Imagens**
   - Nomes de arquivo descritivos: `melhor-notebook-2026.jpg`
   - Texto alternativo (alt) com palavras-chave em PT-BR
   - Comprimir antes de enviar
   - Usar formato WebP quando possível

### Links Internos

- Linkar para artigos relacionados
- Usar texto âncora descritivo em português
- 2-5 links internos por artigo
- Linkar de conteúdo antigo para novo

### Links Externos

- Linkar para fontes confiáveis
- Abrir em nova aba
- Usar `rel="nofollow"` para links de afiliados

---

## 💰 Links de Afiliados

### Conformidade LGPD (OBRIGATÓRIO)

**Toda página com links de afiliados deve incluir:**

```html
<div class="divulgacao-afiliados">
  <p><strong>Divulgação:</strong> Este site participa de programas de afiliados. 
  Isso significa que podemos receber uma comissão se você clicar e realizar 
  uma compra, sem custo adicional para você. Saiba mais na nossa 
  <a href="/divulgacao-afiliados">Página de Divulgação</a>.</p>
</div>
```

### Criando Links de Afiliados

#### Amazon Associates Brasil

1. Obter link do produto na Amazon.com.br
2. Adicionar seu ID de associado: `?tag=altivita-20`
3. Usar o construtor de links: https://associados.amazon.com.br/home/tools

Exemplo:
```
https://www.amazon.com.br/dp/B08XYZ123?tag=altivita-20
```

#### Boas Práticas

- ✅ Usar texto descritivo: "Ver preço na Amazon" ou "Comprar no Mercado Livre"
- ❌ Não usar: "Clique aqui"
- ✅ Adicionar `rel="nofollow sponsored"` aos links de afiliados
- ✅ Atualizar preços em Reais regularmente (com data de consulta)
- ✅ Divulgar claramente e de forma proeminente

---

## 🚀 Deploy

### Cloudflare Pages

O site faz deploy automaticamente a cada push para a branch `main`.

**Configurações de build:**
```
Comando de build: npm run build
Diretório de saída: dist
Versão do Node: 18
```

**Variáveis de ambiente a definir no Cloudflare:**
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_LOMADEE_TOKEN`

### Configuração de Domínio Personalizado

1. Vá em Cloudflare Pages → Seu site → Domínios personalizados
2. Adicione `altivita.com.br`
3. Atualize os registros DNS:
   ```
   CNAME @ altivita.pages.dev
   ```

---

## 🐛 Solução de Problemas

### Problemas Comuns

**Problema: Painel admin não funciona**
- Verificar configuração do OAuth do GitHub
- Verificar URL de callback: `https://altivita.com.br/api/callback`
- Verificar console do navegador para erros

**Problema: Imagens não aparecem**
- Verificar se o caminho do arquivo começa com `/images/`
- Verificar se o arquivo existe em `public/images/`
- Limpar cache do navegador

**Problema: Links de afiliados não rastreando**
- Verificar se o ID de associado está correto
- Verificar formato do link
- Testar em modo anônimo (aba privada)

**Problema: Site não atualizando**
- Verificar logs de build no Cloudflare Pages
- Confirmar push para a branch correta
- Limpar cache do Cloudflare

### Obtendo Ajuda

- Verificar console para erros: `F12` → Aba Console
- Revisar logs de build no Cloudflare Pages
- Verificar documentação do Astro: https://docs.astro.build/pt-br/

---

## 📞 Recursos de Suporte

- **Astro Discord:** https://astro.build/chat
- **Comunidade Cloudflare:** https://community.cloudflare.com
- **GitHub Issues:** https://github.com/munizcesar/AltiVita/issues
- **Email:** contato@altivita.com.br

---

**Lembre-se:** Documente tudo que você fizer. O seu eu do futuro vai agradecer! 🙏

---

**🇧🇷 AltiVita — Encontre o Melhor. Vá com Confiança.**
