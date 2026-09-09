# Life Mais Saúde — Diagnóstico de busca orgânica + Google Ads
**02 de agosto de 2026** · Fontes: Search Console (13/jun–31/jul), GA4 prop. 541572710 (5/jul–1/ago), Google Ads 418-619-4209 (3/jul–1/ago), SERP ao vivo geolocalizada em Campinas, arquivos locais do site.

---

## Resumo

A intuição do Renan está certa, mas a causa é outra. **A Life Mais não está na 2ª página: no orgânico ela não está em página nenhuma** para as consultas comerciais de Campinas. As posições "2,4" e "4,5" que o Search Console mostra são do **pacote local do Google Maps** — o perfil "Life + Saude" é o **nº 2 do mapa** em Campinas. No resultado orgânico abaixo do mapa, nove concorrentes ocupam a 1ª página e a Life Mais não aparece.

Somado a isso, **20 das 34 páginas do site nunca foram rastreadas pelo Google** — o blog inteiro, todas as páginas de eventos e quatro páginas de serviço. Só 14 URLs novas estão de fato indexadas.

E o cluster que o Renan citou — remoção de pacientes — sofre de um problema de vocabulário: **o site vende "transferência inter-hospitalar" e o mercado busca "remoção de pacientes"**.

---

## 1. O número do Search Console está enganando

O GSC mostra, nos últimos 3 meses:

| consulta | impressões | posição | cliques | CTR |
|---|---|---|---|---|
| ambulancia particular | 81 | **2,6** | 2 | 2,5% |
| ambulancia particular campinas | 44 | **4,5** | **0** | **0%** |
| ambulância particular em campinas | 41 | **2,4** | 1 | 2,4% |
| ambulância particular | 38 | **2,2** | **0** | **0%** |
| ambulância campinas | 70 | 3,2 | 1 | 1,4% |
| transporte de pacientes | 41 | **2,3** | **0** | **0%** |
| ambulância | 260 | **2,5** | **0** | **0%** |

Posição 2 com CTR 0% não existe no orgânico. A explicação apareceu na SERP ao vivo.

**Busca "ambulancia particular campinas", desktop, geolocalizado em Jardim Ipaussurama, Campinas:**

*Pacote local (mapa):*
1. Lifecor Ambulâncias — 5,0 ★ (201 avaliações)
2. **Life + Saude — 5,0 ★ (94 avaliações)** ← aqui está a Life Mais
3. Removida Campinas — 4,9 ★ (78 avaliações)

*Resultados orgânicos, 1ª página:* Anjos Ambulância · JC Ambulâncias · LifeCor · Sermedica (Grupo Santana) · Med Ambulâncias · InterHelp · CAP Emergências · Anjos Parceiros (blog) · REMOVIDA — **nenhum resultado da Life Mais.**

O mesmo padrão em "empresa de remoção de pacientes": REMOVIDA · JC · Anjos Parceiros · Sermedica · Anjos · Med · Starex · InterHelp · Transhelp. **Life Mais ausente.** Essa consulta teve **zero impressão em 7 semanas** — o site nem é considerado para ela.

**Consequências práticas:**
- O CTR baixo **não é problema de título ou descrição**. É que o usuário clica no perfil do Google (Ligar / Rotas / Site do perfil), e isso não conta como clique orgânico no site. É o mesmo fenômeno das 20 "Ver rota" e das ações locais que apareceram no Ads em julho.
- O canal que hoje traz cliente pela busca é o **perfil do Google Meu Negócio**, não o site.
- O que Google premia no orgânico dessas consultas é a **home de empresa de ambulância** (8 dos 9 resultados são domínio raiz ou página institucional principal), não artigo nem página profunda.

**A diferença competitiva no mapa é volume de avaliação:** Lifecor tem 201, a Life Mais tem 94. É a alavanca mais direta para tomar o nº 1 do pacote local.

---

## 2. Metade do site nunca foi rastreada

Relatório de Indexação, Search Console:

- **Indexadas: 18** · **Não indexadas: 22** · sitemap declara 34
- Motivo de 20 delas: *"Detectada, mas não indexada no momento"* — e o **Último rastreamento é N/D**, ou seja, **o Googlebot nunca passou nessas páginas.**

**As 20 que o Google nunca visitou:**

| grupo | páginas |
|---|---|
| Blog inteiro | `/blog/` · `ambulancia-para-eventos-guia` · `ambulancia-uti-o-que-e` · `e-obrigatorio-ambulancia-em-eventos` · `remocao-de-pacientes-guia` |
| Todos os eventos | `ambulancia-para-shows` · `ambulancia-para-formaturas` · `ambulancia-para-casamento` · `ambulancia-eventos-corporativos` · `ambulancia-eventos-esportivos` |
| Cidades | `ambulancia-jundiai` · `ambulancia-valinhos` · `ambulancia-indaiatuba` |
| **Serviços (URLs novas)** | `/servicos/transferencia-inter-hospitalar` · `/servicos/atendimento-pre-hospitalar` · `/servicos/home-care` · `/servicos/cursos-capacitacao` |
| Institucionais | `lgpd` · `privacidade` · `termos` |

**E quatro páginas de serviço continuam indexadas na URL ANTIGA**, de antes da reorganização em pastas de junho:

| URL antiga indexada | último rastreamento | impressões | posição |
|---|---|---|---|
| `/transferencia-inter-hospitalar` | 14/jun | 221 | 9,6 |
| `/atendimento-pre-hospitalar` | 14/jun | 83 | 7,6 |
| `/home-care` | 14/jun | 76 | 10,6 |
| `/cursos-capacitacao` | 15/jun | 52 | 8,7 |

O Google não volta nessas páginas há sete semanas. Enquanto isso, a versão nova de cada uma está na fila do "nunca rastreado". A migração de URLs ficou pela metade.

**Não é erro de configuração.** Conferi tudo no ar hoje:
- os 301 das URLs antigas → novas funcionam (7 testados, todos corretos);
- `sitemap.xml` tem as 34 URLs novas, nenhuma antiga;
- `rel=canonical` de todas as páginas de `/servicos/`, `/cidades/` e `/eventos/` aponta corretamente para si mesma.

A causa é **falta de sinal de rastreamento**: domínio novo, pouca autoridade e — o ponto acionável — **links internos fracos para essas páginas**. O interlinking em silo no rodapé foi feito só na home em junho e ficou pendente nas outras 37 páginas. Página que só existe no sitemap e não é linkada de lugar nenhum é exatamente a que o Google adia.

---

## 3. O cluster de remoção está com o vocabulário errado

Posições reais no GSC para o tema:

| consulta | posição |
|---|---|
| vida uti móvel | 13,0 |
| serviço de remoção ambulância | 20,0 |
| transferência inter hospitalar | 22,0 |
| transferência inter-hospitalar | 23,0 |
| remoção inter hospitalar | 26,2 |
| inter hospitalar | 27,0 |
| transfer hospitalar | 34,0 |
| transporte inter-hospitalar | 36,0 |
| transporte inter hospitalar | 46,0 |
| intra hospitalar | 54,5 |
| **empresa de remoção de pacientes** | **sem impressão** |

Aqui sim é 2ª, 3ª e 4ª página de verdade.

A página que deveria cobrir isso é `servicos/transferencia-inter-hospitalar.html`, e ela é boa: 1.621 palavras, schema, FAQ. O problema é o enquadramento:

- **Title:** "Transferência Inter-Hospitalar em Campinas e SP"
- **H1:** "Transferência Inter-Hospitalar com Ambulância UTI 24h"
- A palavra "remoção" aparece **5 vezes** no arquivo inteiro.

"Transferência inter-hospitalar" é como o hospital chama. **"Remoção de pacientes" é como o cliente busca.** Os concorrentes que ocupam a 1ª página usam "remoção" no título e na home. Não existe no site uma página `/servicos/remocao-de-pacientes`, e o único conteúdo que usa a palavra certa — `blog/remocao-de-pacientes-guia` — é justamente uma das páginas que o Google nunca rastreou.

**Canibalização adicional em Campinas:** duas páginas disputam a mesma consulta.
- `/servicos/ambulancia-particular-campinas` — 261 impr, pos 6,4, 7 cliques
- `/cidades/ambulancia-campinas` — 489 impr, pos 8,6, 8 cliques

Nenhuma das duas consolida força suficiente para entrar no top 10.

---

## 4. GA4 — o orgânico é o melhor tráfego do site, e é o menos alimentado

**Últimos 28 dias (5/jul–1/ago), 480 sessões:**

| canal | sessões | engajamento | tempo médio | eventos principais | taxa de conversão |
|---|---|---|---|---|---|
| Paid Search | 245 (51%) | 46,5% | 14s | 82 | 26,1% |
| **Organic Search** | **115 (24%)** | **70,4%** | **44s** | **29** | **22,6%** |
| Direct | 66 (14%) | 40,9% | 14s | 8 | 12,1% |
| Organic Social | 28 (6%) | 39,3% | 9s | 2 | 7,1% |
| AI Assistant | 9 (2%) | 77,8% | 17s | 4 | 44,4% |

O orgânico converte praticamente igual ao pago (22,6% × 26,1%), com **engajamento 1,5× maior e permanência 3× maior** — e sem custo por clique. Metade do volume, mas qualidade superior.

Note também o canal **AI Assistant**: 9 sessões, 44% de conversão. Pouquíssimo volume, mas é o de maior taxa da conta — vale acompanhar.

**Páginas de entrada do orgânico (115 sessões):**

| página | sessões | tempo médio | conversões | taxa |
|---|---|---|---|---|
| `/` (home) | 71 | 54s | 20 | 23,9% |
| `/servicos/ambulancia-particular-campinas` | 10 | **3s** | **0** | **0%** |
| `/servicos/cobertura-de-eventos` | 5 | 1min03 | 3 | **60%** |
| `/cidades/ambulancia-americana` | 5 | 54s | 1 | 20% |
| `/cidades/ambulancia-campinas` | 4 | 1min12 | 0 | 0% |
| `/cidades/ambulancia-vinhedo` | 3 | 34s | 1 | 33% |
| `/cidades/ambulancia-paulinia` | 2 | 1min03 | 1 | 50% |

Dois pontos:
- A **home carrega 62% do orgânico e 69% das conversões orgânicas.** O site inteiro depende de uma página.
- **`/servicos/cobertura-de-eventos` converte a 60%** no orgânico — a melhor página do site nesse quesito, com apenas 5 sessões. É o maior desperdício de oportunidade da conta: o serviço de maior margem, com a melhor página, sem tráfego.
- `/servicos/ambulancia-particular-campinas` recebe visita orgânica e o usuário sai em **3 segundos**. Amostra pequena (10 sessões), mas é o oposto do comportamento no tráfego pago, onde a mesma página converte 22%. Vale observar no próximo mês.

---

## 5. Google Ads — o que dá para melhorar

**Situação da conta (3/jul–1/ago):** 4.392 impressões · 450 cliques · CTR 10,25% · CPC R$ 2,44 · **custo R$ 1.096,34** · 93 conversões · **custo/conversão R$ 11,79** · pontuação de otimização 74,9%.

Duas correções ao que estava na memória do projeto:
- **A conta NÃO parou por falta de saldo.** Ela migrou para **pagamento automático pós-pago** (Mastercard ••5080, cobrança dia 1º de cada mês ou ao atingir R$ 2.000). Último pagamento 02/ago, R$ 77,30. A campanha rodou normalmente até 1/ago. Julho fechou em **R$ 1.077,30**.
- O custo/conversão de R$ 11,79 confirma que **a meta "Contatos" (WhatsApp) ficou gravada** na campanha — a correção de 27/jul funcionou.

### 5.1 O problema estrutural: dois dos três grupos estão mortos

| grupo de anúncios | impressões | cliques | custo | conversões |
|---|---|---|---|---|
| **Grupo de anúncios 1** | 4.340 | 446 | **R$ 1.087,76** | 93 |
| B — Eventos | 44 | 4 | R$ 8,58 | 0 |
| C — Empresas e Contratos | 8 | 0 | R$ 0,00 | 0 |

**99,2% do orçamento vai para um único grupo genérico.** Os grupos de eventos e de contratos empresariais — os dois serviços de maior margem e menor concorrência — receberam 44 e 8 impressões em um mês inteiro. Na prática eles não existem.

Isso acontece porque o Grupo 1 usa correspondência ampla e come todo o leilão antes que B e C tenham chance. E é especialmente irônico junto com o dado do GA4: `/servicos/cobertura-de-eventos` é a página que **mais converte no orgânico (60%)** e a campanha de eventos não roda.

### 5.2 Metade do dinheiro está em termos que o Google não mostra

| | cliques | custo | conversões | CPA |
|---|---|---|---|---|
| Termos visíveis | 227 | R$ 552,22 | 70 | **R$ 7,89** |
| **"Outros termos de pesquisa"** (ocultos) | 223 | **R$ 544,12** | 23 | **R$ 23,66** |

Os termos que o Google esconde custam o mesmo e rendem 3× menos. É consequência direta da correspondência ampla no Grupo 1.

### 5.3 Desperdício identificado (3/jul–1/ago)

| termo | cliques | custo | conversões | situação |
|---|---|---|---|---|
| helpmóvel americana | 10 | R$ 21,57 | 1 | marca de concorrente, **não negativado** |
| helpmovel americana sp | 8 | R$ 19,89 | 0 | **não negativado** |
| telefone helpmóvel americana | 5 | R$ 11,76 | 1 | **não negativado** |
| hospital santa tereza campinas | 7 | R$ 22,54 | 0 | já excluído em 26/jul |
| hospital unicamp campinas | 7 | R$ 10,51 | 0 | **não negativado** |
| hospital mais próximo de mim | 3 | R$ 10,52 | 0 | **não negativado** |
| vera cruz campinas | 4 | R$ 11,55 | 0 | já excluído |
| ambulância jaguariúna + telefone | 11 | R$ 26,30 | 0 | palavra ativa, 0 conversão |

O bloco **Helpmóvel soma R$ 53,22 com 2 conversões (CPA R$ 26,61)** — mais que o dobro do CPA médio. Não é lixo puro (converte), mas está no grupo errado e sem anúncio de comparação.

Termos que **converteram bem**: `ambulancia particular campinas` (R$ 11,00/conv), `ambulância valinhos` (R$ 10,57), `central de ambulância indaiatuba` (R$ 16,78).

---

## 6. Plano de ação

### Prioridade 0 — destravar o rastreamento (custo zero, maior impacto)

| # | ação | onde | esforço |
|---|---|---|---|
| 1 | **Interlinking em silo no rodapé de TODAS as 37 páginas** (hoje só a home tem). Cada página de serviço linka as outras 8 + as 11 cidades; cada cidade linka os 9 serviços. É a tarefa #12, pendente desde junho — e é **a causa raiz** das 20 páginas nunca rastreadas. | todos os HTML | médio |
| 2 | Adicionar na home e nas páginas de serviço **links visíveis para os 5 eventos e para o blog** (hoje os eventos são órfãos de link interno real). | `index.html`, `servicos/*.html` | baixo |
| 3 | Depois do deploy: **Inspeção de URL → Solicitar indexação** nas 12 prioritárias — as 4 novas de serviço, as 5 de eventos, as 3 cidades. (Institucionais e blog na semana seguinte; o limite diário do GSC é ~10.) | Search Console | baixo |
| 4 | Reenviar `sitemap.xml` com `lastmod` atualizado após o deploy. | Search Console | baixo |

> Sem o passo 1, os passos 3 e 4 dão um empurrão que dura pouco: o Google volta a despriorizar página sem link interno.

### Prioridade 1 — ganhar o cluster de remoção

| # | ação | detalhe |
|---|---|---|
| 5 | **Reposicionar `servicos/transferencia-inter-hospitalar.html` para o vocabulário do cliente.** Novo title: `Remoção de Pacientes e Transferência Inter-Hospitalar em Campinas 24h \| Life Mais Saúde`. Novo H1: `Remoção de Pacientes com Ambulância UTI 24h em Campinas e Região`. Trabalhar "remoção", "remoção de pacientes", "empresa de remoção", "remoção hospitalar" ao longo do texto (hoje "remoção" aparece 5× em 1.621 palavras). Manter "transferência inter-hospitalar" como termo secundário. | a página já existe e é boa — é reescrita de casca, não de conteúdo |
| 6 | **Resolver a canibalização de Campinas.** `/servicos/ambulancia-particular-campinas` fica como a página comercial (preço, orçamento, CTA); `/cidades/ambulancia-campinas` fica como a página local (bairros, hospitais, cobertura) e linka para a comercial com âncora "ambulância particular em Campinas". | evita as duas travarem em pos. 6–9 |
| 7 | **Campanha de avaliações no Google Meu Negócio.** 94 avaliações contra 201 da Lifecor. É a alavanca mais direta para tomar o nº 1 do pacote local — que é de onde vem o contato hoje. Meta: +30 avaliações em 90 dias, pedindo no fim de cada atendimento. | depende da cliente |

### Prioridade 2 — Google Ads

| # | ação | ganho esperado |
|---|---|---|
| 8 | **Dar orçamento próprio a Eventos e Empresas.** Separar em campanhas independentes (R$ 10–12/dia cada) ou, no mínimo, restringir a correspondência ampla do Grupo 1 para que B e C entrem no leilão. Hoje eles têm 0,4% das impressões. | destrava os 2 serviços de maior margem |
| 9 | **Negativar:** `hospital unicamp campinas`, `hospital mais próximo de mim`, `[hospital unicamp]`, `hospital de clinicas`, `pronto socorro unicamp` (exatas/frase, como em 26/jul, para não bloquear "ambulância para hospital X"). | ~R$ 21/mês recuperados |
| 10 | **Decidir o que fazer com "helpmóvel".** Ou negativar (economiza R$ 53/mês, perde 2 conversões) ou mover para um grupo próprio com anúncio de comparação e CPC limitado. Recomendo a segunda — converte, só está no lugar errado. | CPA de R$ 26,61 → faixa de R$ 12 |
| 11 | **Testar "Maximizar conversões" SEM CPA alvo.** A conta tem 93 conversões/mês, volume suficiente. O erro de 15/jul foi o CPA alvo de R$ 8 (irreal), não a estratégia. Avaliar em 14 dias com dado, não com sensação. | CPA potencialmente 15–25% menor |
| 12 | Reduzir a contagem de `contato_telefone` de "Todas" para "Uma" — hoje conta cada evento e não cada clique único, o que infla a coluna de conversões. | número mais confiável |
| 13 | Há **1 rascunho em andamento** na campanha. Verificar o que é antes de qualquer alteração. | evita conflito |

### O que NÃO fazer

- **Não reescrever title e meta description das páginas de Campinas achando que o CTR de 0% é culpa delas.** O clique está indo para o perfil do Google. Mexer nos títulos aqui não move nada.
- **Não criar mais páginas de cidade nem mais artigos de blog agora.** Já existem 20 páginas que o Google nunca visitou. Publicar mais conteúdo antes de resolver o rastreamento só aumenta a fila.
- **Não aplicar os cards de "Recomendações" do Ads sem revisar** — em 21/jul um deles removeu 8 palavras-chave em frase dos 3 grupos. O Google está sugerindo Performance Max nesta conta; para um orçamento de R$ 40/dia com 3 grupos mal alimentados, é ruído.
- **Não voltar a usar CPA alvo** enquanto o volume for este.

### Depende da cliente

- Avaliações no Google (item 7) — o único item de verdadeiro impacto competitivo.
- Fotos e mini-cases nominais de eventos, com autorização de logo — alimenta `/servicos/cobertura-de-eventos`, que é a página que mais converte.
- **Dado de fechamento:** quantos dos 93 leads de julho viraram serviço e por quanto. Sem isso o ROI dos R$ 1.077 é cenário, não resultado.

---

## Anexo — números de referência

**Search Console, 13/jun a 31/jul:** 152 cliques · 4.510 impressões · CTR 3,4% · posição média 5,4 · 238 consultas · 20 URLs com impressão.

**Páginas com mais impressão:** `/` 2.781 (98 cliques) · `/cidades/ambulancia-campinas` 489 (8) · `/servicos/ambulancia-particular-campinas` 261 (7) · `/transferencia-inter-hospitalar` 221 (2) · `/cidades/ambulancia-americana` 198 (6) · `/cidades/ambulancia-sumare` 170 (4) · `/cidades/ambulancia-sao-paulo` 128 (1).

**Marca:** "life mais" 18 cliques/67 impressões/CTR 26,9% — as consultas de marca são as únicas com CTR saudável, o que reforça que o problema é de **descoberta**, não de atratividade do resultado.

**Ruído no relatório:** cerca de 600 das 4.510 impressões vêm de consultas do tipo "qual é o número da ambulância", "número da ambulância samu", "posto de saúde perto de mim" — todas com 0 clique. São buscas em que o Google responde na própria tela. Não são oportunidade e não devem entrar em nenhuma meta.

**Verificações técnicas feitas hoje:** 301 das URLs antigas OK · sitemap.xml com 34 URLs corretas · canonicais corretas em todas as páginas de serviço, cidade e evento.
