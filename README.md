# Life Mais Saúde — Site

Site institucional da **Life Mais Saúde** — ambulância particular e atendimento pré-hospitalar em **São Paulo, Campinas e região**.

- **Domínio:** https://lifemaissaude.com/ (sem `www`)
- **Arquitetura:** site estático de **página única** (`index.html`), com CSS e JavaScript inline no próprio arquivo (sem build, sem dependências).

---

## 📁 Estrutura de arquivos

```
Life+saude/
├── index.html          → o site inteiro (HTML + CSS + JS)
├── logo.png            → logotipo
├── robots.txt          → libera indexação + aponta o sitemap
├── sitemap.xml         → mapa do site (1 página)
├── llms.txt            → resumo para buscadores de IA (ChatGPT, Perplexity etc.)
├── README.md           → este arquivo
└── images/
    ├── *.jpg / *.jpeg  → imagens dos serviços (otimizadas)
    ├── carrosel/       → 26 fotos de eventos (carrossel)
    └── _originais/     → BACKUP das imagens antes da otimização (NÃO subir ao servidor)
```

---

## 🚀 Como publicar

1. Suba **todos os arquivos** para a raiz do servidor/hospedagem, **exceto a pasta `images/_originais/`**.
   - ⚠️ A pasta `images/_originais/` é só backup local. Se subir, o site volta a pesar ~38 MB à toa.
2. Garanta que `robots.txt`, `sitemap.xml` e `llms.txt` fiquem na **raiz** do domínio.
3. Após publicar, cadastre o site no **Google Search Console** e envie o `sitemap.xml`.

---

## ✅ O que já está pronto

### Conteúdo / layout
- Imagens dos setores atualizadas (atendimento pré-hospitalar, cobertura de eventos, transferência inter-hospitalar, bombeiro civil, conceito em remoções médicas).
- Bloco no hero: "cobrimos qualquer proposta para eventos" + área de atendimento (SP, Campinas e região).
- **Carrossel automático** com 26 fotos de eventos (loop contínuo, pausa ao passar o mouse).
- **Lightbox**: clicar em qualquer foto abre ampliada, com setas, contador e fechar (Esc / clique fora / teclado).

### Performance
- Página reduzida de **~21 MB para ~4,4 MB** (−79%).
- Hero (imagem principal / LCP): 4.7 MB → **381 KB**.
- PNGs de foto convertidos para JPG com nomes descritivos.
- 38 MB de imagens não usadas (lixo do export original) removidas.

### SEO
- **NAP consistente** (Nome + Endereço + Telefone) no rodapé, na seção de contato e no schema:
  - **Endereço:** Av. Guarani, 603 — Jardim Guarani, Campinas - SP, 13100-211
  - **Telefones:** (19) 3217-8619 | (19) 99238-5046
  - **E-mail:** contato@lifemaissaude.com
- `title`, `meta description`, `keywords`, Open Graph e geo tags com foco em SP/Campinas.
- **Schema.org** JSON-LD (`EmergencyService` + `MedicalBusiness`) com endereço, horário 24h, área de atendimento e catálogo de serviços.
- `robots.txt`, `sitemap.xml` e `llms.txt` criados.
- Favicon, alt text descritivo com localização e `fetchpriority="high"` no hero.
- **SEO Health Score estimado: ~85/100.**

---

## 🔜 Pendências / próximos passos (dependem da cliente)

1. **Google Meu Negócio (GBP)** — usar o mesmo endereço e telefone. É o fator nº 1 para aparecer no mapa / "ambulância perto de mim". Depois de criado, pegar as coordenadas (lat/long) para adicionar ao schema.
2. **Sinais de confiança (E-E-A-T)** — saúde é tema sensível para o Google. Adicionar responsável técnico (nome + registro) e nº de alvará/licença.
3. **Depoimentos** de clientes reais na página (prova social).
4. **Links legais** do rodapé (Privacidade / Termos / LGPD) ainda apontam para `#` — criar as páginas ou remover.

---

## 🛠️ Notas técnicas

- O site é **um único `index.html`**. Toda edição de conteúdo, estilo ou script é feita nele.
- **Imagens do carrossel NÃO devem usar `loading="lazy"`** — quebra o carregamento durante a animação. Usar `decoding="async"`.
- Carrossel = marquee em CSS: o conjunto de 26 fotos é duplicado e animado com `transform: translateX(-50%)` para o loop ser contínuo.
- Reotimização de imagens (Windows, sem instalar nada): feito via `System.Drawing` no PowerShell, lendo as originais de `images/_originais/`.

---

*Última atualização: junho de 2026.*
