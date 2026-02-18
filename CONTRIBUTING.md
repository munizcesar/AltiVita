# 🤝 Contribuindo com o AltiVita

## ⚠️ **IMPORTANTE: A Documentação é VIVA**

> **PARA ASSISTENTES DE IA E DESENVOLVEDORES:**  
> Toda alteração neste projeto DEVE atualizar a documentação viva em `/docs`

---

## 📝 Regras de Atualização de Documentação

### **ATUALIZAÇÕES OBRIGATÓRIAS:**

Ao fazer alterações, você **DEVE** atualizar:

#### 🎨 **Se a Identidade Visual Mudar:**
```
✅ Atualizar: docs/BRANDING.md
✅ Atualizar: docs/CHANGELOG.md
❌ NUNCA deletar versões anteriores
✅ SEMPRE adicionar nova versão ao histórico
```

#### 🔧 **Se Código ou Funcionalidades Mudarem:**
```
✅ Atualizar: docs/CHANGELOG.md
✅ Adicionar entrada no TOPO (não no final)
✅ Incrementar número de versão
✅ Categorizar: Adicionado/Alterado/Corrigido/Removido
```

#### 📚 **Se Adicionar Nova Documentação:**
```
✅ Atualizar: docs/README.md
✅ Atualizar: docs/CHANGELOG.md
✅ Linkar do README principal se relevante
```

---

## 🤖 Para Assistentes de IA

### **Antes de QUALQUER alteração de código:**
1. Verificar se a alteração afeta a identidade visual → Atualizar `docs/BRANDING.md`
2. Verificar se a alteração é relevante para produção → Atualizar `docs/CHANGELOG.md`
3. Sempre preservar o histórico → NUNCA deletar versões antigas

### **Padrão a Seguir:**
```bash
# 1. Fazer a alteração
git commit -m "feat: nova funcionalidade"

# 2. Atualizar CHANGELOG (OBRIGATÓRIO!)
git commit -m "docs: atualiza changelog v1.x.x"

# 3. Atualizar BRANDING se necessário
git commit -m "docs: atualiza guia de identidade visual"
```

---

## 👤 Para Desenvolvedores

### **Fluxo de Trabalho Padrão:**

```bash
# 1. Criar branch de funcionalidade
git checkout -b feature/nova-funcionalidade

# 2. Fazer as alterações
# ... alterações de código ...

# 3. Atualizar documentação (OBRIGATÓRIO!)
vim docs/CHANGELOG.md  # Adicionar suas alterações

# 4. Commit de tudo
git add .
git commit -m "feat: adiciona nova funcionalidade"
git commit -m "docs: atualiza changelog para v1.x.x"

# 5. Push e Pull Request
git push origin feature/nova-funcionalidade
```

---

## 📊 Números de Versão

```
MAJOR.MINOR.PATCH

Exemplos:
1.0.0 → 1.0.1  (correção de bug)
1.0.1 → 1.1.0  (nova funcionalidade)
1.1.0 → 2.0.0  (mudança significativa)
```

---

## ✅ Checklist de Pull Request

Antes de enviar o PR:

- [ ] Alterações de código commitadas
- [ ] `docs/CHANGELOG.md` atualizado com as mudanças
- [ ] Número de versão incrementado
- [ ] `docs/BRANDING.md` atualizado (se identidade visual mudou)
- [ ] Versões anteriores preservadas (não deletadas)
- [ ] Testes passando (se aplicável)
- [ ] Documentação clara e útil
- [ ] Conteúdo em português brasileiro

---

## 🚨 Erros Comuns

### **❌ NÃO FAÇA:**
- Pular atualizações de documentação
- Deletar entradas antigas do changelog
- Substituir o BRANDING.md (adicione a ele, não substitua)
- Usar descrições vagas
- Esquecer números de versão
- Usar inglês em conteúdo voltado ao usuário final

### **✅ FAÇA:**
- Atualizar docs a cada alteração
- Adicionar novas versões no topo
- Preservar todo o histórico
- Ser específico e claro
- Seguir versionamento semântico
- Manter todo o conteúdo em português

---

## 📂 Estrutura de Documentação

Toda a documentação fica em `/docs`:

```
docs/
├── README.md        ← Como atualizar os docs (leia primeiro!)
├── BRANDING.md      ← Logo, cores, especificações da marca
└── CHANGELOG.md     ← Histórico de versões (atualizar com frequência!)
```

**➡️ LEIA:** `/docs/README.md` para instruções detalhadas

---

## 🔗 Links Rápidos

- [Guia de Documentação](/docs/README.md) ← **COMECE AQUI**
- [Especificações da Marca](/docs/BRANDING.md)
- [Histórico do Projeto](/docs/CHANGELOG.md)

---

## ❓ Dúvidas?

**Não sabe se deve atualizar os docs?**

🟢 **SIM, ATUALIZE!**  
Na dúvida, sempre atualize. Documentação em excesso > Documentação insuficiente.

**Qual arquivo atualizar?**
- Mudou o design? → `BRANDING.md` + `CHANGELOG.md`
- Adicionou funcionalidade? → `CHANGELOG.md`
- Corrigiu bug? → `CHANGELOG.md`
- Nova documentação? → `docs/README.md` + `CHANGELOG.md`

---

## 🌟 Lembre-se

> "Documentação não é um detalhe — é parte do código."

**Essas regras existem para:**
- ✅ Preservar o histórico do projeto
- ✅ Ajudar futuros colaboradores
- ✅ Tornar assistentes de IA mais eficazes
- ✅ Registrar decisões tomadas
- ✅ Construir conhecimento institucional

---

**Obrigado por contribuir! 🚀**

---

**Última Atualização:** Fevereiro de 2026  
**Mantido por:** Equipe AltiVita 🇧🇷
