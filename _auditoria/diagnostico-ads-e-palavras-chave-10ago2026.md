# Life Mais Saúde — Diagnóstico da campanha + pesquisa de palavras-chave
**Data:** 10/ago/2026 · **Conta:** 418-619-4209 (login `lifemaissaudee@gmail.com`) · **Campanha:** [Pesquisa] Life Mais Saúde — Leads RMC

Documento de trabalho para montar/ajustar a campanha. Tudo aqui é dado lido no painel, não estimativa — exceto onde marcado.

---

## 1. O que aconteceu em domingo 09 e segunda 10 de agosto

| | dom 09/ago | seg 10/ago (parcial) |
|---|---|---|
| Impressões | 214 | 198 |
| Cliques | 25 | 11 |
| CTR | 11,68% | 5,56% |
| CPC médio | **R$ 3,20** | R$ 2,48 |
| Custo | **R$ 80,00** | R$ 27,25 |
| Conversões | 2 | 1 |
| CPA | R$ 40,00 | R$ 27,25 |

Mesmo par da semana anterior: **dom 02/ago** R$ 42,80 / 25 cliques / 5 conv · **seg 03/ago** R$ 27,41 / 15 cliques / 5 conv.

> ⚠️ Segunda estava **parcial** quando foi lida (dia não fechou, e conversão de ligação/GA4 entra com até 1–2 dias de atraso).

**Agosto 1–10:** 2.027 impressões · 180 cliques · **R$ 396,37** · 27 conversões · CPA R$ 14,68 · CPC R$ 2,20 · ritmo de R$ 39,64/dia (≈ R$ 1.229 no mês, dentro do teto).

**Série diária de conversões em agosto:** 1 · 5 · 5 · 4 · 2 · 3 · 2 · 2 · 2 · 1
→ **Não houve colapso de leads.** Os dias 5, 7 e 8 também deram 2. O dia 02 (5 conv) é que foi o melhor do mês.

**O que É real: o custo.** 09/ago foi o **primeiro dia do mês a bater o teto** (R$ 80 = 2× o orçamento diário) e teve o **maior CPC do mês**. Mas o CPC já vinha subindo antes das mudanças: 1,73 → 1,71 → 1,83 → 2,09 → 2,04 → 2,01 → 2,06 → **2,65 (dia 8)** → 3,20 (dia 9). Não dá para culpar só a remoção das negativas.

---

## 2. O GARGALO PRINCIPAL: o telefone não está sendo atendido

Fonte: Editor de relatórios → **Detalhes da chamada** (`predefinedReportId=122`), período 1–10/ago.

**26 ligações vieram do anúncio em 10 dias:**

| status | quantidade |
|---|---|
| **Perdida (0 segundos)** | **12 (46%)** |
| Atendida abaixo de 60s | 12 |
| **Atendida acima de 60s** | **2** (112s e 71s) |

- **Domingo 09/ago, o dia de R$ 80: 6 ligações — 5 perdidas e 1 de 9 segundos.**
- Perdidas em 00h, 01h, 05h, 07h, 08h, 19h — **mas também 15h, 16h e 17h de um dia útil (4/ago, três seguidas)**. O anúncio e o site vendem 24 horas.
- As linhas "Perdida" **não trazem o número do chamador** (só as atendidas trazem) → **não dá para retornar** essas ligações.

**Isso explica o painel:** a ação `Calls from ads` está configurada com **"Duração da chamada: 60 segundos"** (conferido em `ctId=7482365271`) — por isso marcou só **2** conversões no mês, batendo exatamente com as 2 chamadas longas. **O Google já mede certo. Quem não está atendendo é a operação.**

> A cliente informou **zero remoções fechadas de 1 a 10/ago**. Com 12 ligações não atendidas a ~R$ 14 o contato, são ~R$ 170 no chão — e é provável que ali estivesse a remoção que não aconteceu.

---

## 3. As 27 "conversões" não são 27 leads

| ação de conversão | qtd (1–10/ago) | contagem | o que é de verdade |
|---|---|---|---|
| `LifeMaisSaude (web) contato_whatsapp` | 17 | Uma | clique no botão do WhatsApp |
| `LifeMaisSaude (web) contato_telefone` | 8 | **Todas** | clique no link `tel:` do site |
| `Calls from ads` | 2 | Todas (mín. 60s) | ligação real com conversa |
| `LifeMaisSaude (web) generate_lead` | 0 | Uma | formulário |
| `LifeMaisSaude (web) form_submit` | 0 | secundária | formulário (dedup) |
| `Clicks to call` | 1 | fora das metas | — |

**25 das 27 são cliques de intenção.** Zero remoção fechada é compatível com esse quadro — não é contradição, é o que o número sempre significou.

---

## 4. Desempenho por cidade (1–10/ago)

| cidade | custo | cliques | conversões | CPA |
|---|---|---|---|---|
| Campinas | R$ 144,06 | 68 | 11 | R$ 13,10 |
| Jundiaí | R$ 56,43 | 23 | 3 | R$ 18,81 |
| Americana | R$ 48,86 | 24 | 5 | R$ 9,77 |
| **Jaguariúna** | **R$ 35,64** | 13 | **0** | — |
| Sumaré | R$ 28,98 | 14 | 3 | R$ 9,66 |
| Valinhos | R$ 19,15 | 9 | 1 | R$ 19,15 |
| **Hortolândia** | R$ 18,91 | 8 | 4 | **R$ 4,73** ← melhor |
| **Paulínia** | R$ 16,43 | 8 | **0** | — |
| **Itatiba** | R$ 8,70 | 4 | **0** | — |
| **Indaiatuba** | R$ 7,75 | 4 | **0** (CTR 2,76%) | — |

**DECISÃO TOMADA: não cortar as 4 cidades zeradas.** A amostra não sustenta (4 a 13 cliques; com a taxa da conta, dar zero em 8 cliques por acaso tem ~30% de chance). E são cidades atendidas — uma remoção de Jaguariúna para um hospital de Campinas é serviço bom, de ticket melhor. **O problema não é a cidade, é a intenção de busca dentro dela** (em Jaguariúna, "telefone da ambulância de jaguariúna" = ambulância pública; em Indaiatuba, "salute indaiatuba" = concorrente).

**Alternativa preferida:** negativas cirúrgicas e, se necessário, **ajuste de lance de −30%** nessas praças (reversível, mantém presença). Reavaliar em 30 dias com 40–50 cliques por cidade.

---

## 5. Alterações aplicadas em 10/ago (autorizadas, com confirmação na tela)

Negativas: **62 → 68**, nível campanha.

```
"hospitais em"
[hospital em campinas]
[hospital renascença campinas]
[hospital irmandade de misericórdia de campinas]
[removidas]
[removida]
```

Motivo: em 10/ago, **R$ 9,89 dos R$ 11,37 de termos visíveis (87%) e 4 dos 5 cliques** foram em gente procurando *hospital*, não ambulância — efeito de ter removido a negativa ampla `hospital` em 09/ago. `removida`/`removidas` é a marca do concorrente **Removida**.

### Efeito das mudanças de 09/ago (verificado)
- ✅ **Funcionou:** as 6 negativas de marca (helpmóvel/medcar/medicar) — `helpmóvel americana` R$ 4,82 e `medicar ambulancia` R$ 3,70 aparecem no domingo e **sumiram na segunda**.
- ✅ **Funcionou:** a pausa de `emergência ambulância` — os "telefone da ambulância de Jaguariúna" gastaram R$ 6,05 no domingo e sumiram na segunda.
- ✅ **RSA aprovado** ("Qualificada"): `Serviço Particular Pago` (fixado), `Particular, Não é o SAMU` e a descrição "Serviço particular pago, 24h em Campinas e região. Não somos SAMU nem serviço público." estão veiculando.
- ❌ **Efeito colateral:** remover a negativa ampla `hospital` reabriu a busca de quem procura hospital (corrigido acima).

### Ainda aberto
- **Termos ocultos = 65% do gasto** dos dois dias (R$ 69,32 de R$ 107,25) — e são eles que trazem as 3 conversões. Efeito da correspondência ampla.
- Alerta no painel: **"Adicionar uma forma de pagamento alternativa"**.
- Grupos **B — Eventos** (5 impressões) e **C — Empresas** (0) continuam parados.

---

## 6. Planejador de palavras-chave — ESTADO DE SÃO PAULO
Plano salvo na conta: "Início do plano às ago. 10, 2026, 8 PM" (`planId=1431054423`). Período jul/2025–jun/2026.

### 6.1 Núcleo remoção/particular ≈ **2.820 buscas/mês**

| palavra-chave | buscas/mês | concorrência | lance topo de página |
|---|---|---|---|
| ambulância particular | **1.900** | Média | R$ 7,15 – 14,28 |
| aluguel de ambulância | **260** (+52% em 3 meses, +23% YoY) | Alta | R$ 4,29 – 14,82 |
| transporte de pacientes | **210** (+357% YoY, −46% em 3 meses) | **Baixa** | R$ 2,74 – 8,17 |
| locação de ambulância | 110 | Média | R$ 4,86 – 14,06 |
| ambulância particular campinas | 70 | Alta | R$ 2,35 – 7,56 |
| ambulância particular são paulo | 70 | Alta | R$ 9,26 – 16,01 |
| ambulância uti móvel | 50 (+67%) | Média | R$ 4,00 – 16,46 |
| remoção de pacientes | 50 | Média | R$ 7,21 – 14,90 |
| remoção hospitalar | 50 (+67%) | Média | R$ 6,11 – 13,02 |
| empresa de remoção de pacientes | 30 (−80% YoY) | Alta | R$ 7,38 – 15,75 |
| transferência inter hospitalar | 20 | Baixa | — |

**Sem volume mensurável:** `remoção de pacientes + <qualquer cidade>` (Campinas, Jundiaí, Americana, Sumaré, Hortolândia, Indaiatuba, Valinhos, Jaguariúna, Paulínia, Vinhedo), `transporte de pacientes campinas`, `uti móvel campinas`, `quanto custa uma ambulância particular`, `ambulância para alta hospitalar`, `transporte de paciente acamado`, `transporte de idoso em ambulância`, `ambulância 24 horas particular`.

> 🔑 **A busca por cidade acontece com "ambulância particular + cidade", não com "remoção de pacientes + cidade".** Montar as combinações por praça em cima de `ambulância particular`.

### 6.2 Rota São Paulo ↔ Campinas — **HIPÓTESE MORTA**

Zero volume mensurável nos 9 termos: `ambulância de são paulo para campinas` · `ambulância de campinas para são paulo` · `ambulância intermunicipal` · `remoção intermunicipal` · `transporte de paciente entre cidades` · `transporte de paciente longa distância` · `ambulância para outra cidade` · `transferência de paciente entre hospitais` · `remoção de paciente para outro estado`.

Existe demanda de negócio, mas **não se expressa como busca** — é B2B e relacional (hospital, assistente social, plano de saúde ligam para fornecedor conhecido). Um leigo em pânico digita "ambulância particular", não "ambulância intermunicipal".

**→ NÃO construir página de rota.** Se a cliente quiser esse fluxo, o caminho é comercial (visitar hospitais e casas de repouso), não mídia paga.

### 6.3 Eventos ≈ **120 buscas/mês** — 1/20 do volume da remoção

| palavra-chave | buscas/mês | concorrência | lance topo |
|---|---|---|---|
| ambulância para eventos | **40** (+80% em 3 meses, **+200% YoY**) | **Baixa** | R$ 5,92 – 16,90 |
| brigadista para evento | 70 (−93% YoY, sem dado de lance — **suspeito**) | Média | — |
| aluguel de ambulância para eventos | 10 | Alta | R$ 3,81 – 16,95 |

**Sem volume:** ambulância para show / formatura / casamento / corrida de rua / evento corporativo, posto médico para evento, cobertura médica para eventos, empresa de ambulância para eventos, remoção para eventos esportivos, bombeiro civil para evento.

**Leitura:** não enche agenda por busca, mas **concorrência baixa e triplicou no ano** — dá para dominar essa busca com R$ 8–10/dia. Se o ticket de um evento for R$ 1.500–3.000, dois contratos pagam a frente.

### 6.4 Duas hipóteses derrubadas pelo dado
1. **`é obrigatório ambulância em eventos` não tem volume.** O gancho da exigência legal não se sustenta como palavra-chave paga (como conteúdo de SEO o artigo continua fazendo sentido).
2. **As 5 páginas por tipo de evento do site** (shows, formaturas, casamento, corporativos, esportivos) **não têm busca que as sustente.** O que tem volume é o guarda-chuva "ambulância para eventos" — não justifica grupo de anúncios separado por tipo.

---

## 7. Planejador — SOMENTE A REGIÃO ATENDIDA (10 cidades)

**Locais medidos:** Campinas, Hortolândia, Sumaré, Paulínia, Nova Odessa, Americana, Valinhos, Vinhedo, Jundiaí, Indaiatuba.
**Limitação da ferramenta:** o Planejador aceita **no máximo 10 locais** para ideias de palavras-chave — Jaguariúna, Itatiba, Monte Mor e Pedreira ficaram de fora. São as 4 menores praças (juntas deram 86+34 impressões no mês), então o efeito no total é pequeno.

**275 ideias de palavra-chave** geradas a partir de 10 sementes.

### 7.1 O tamanho real da praça

| palavra-chave | RMC (10 cidades) | estado de SP | proporção |
|---|---|---|---|
| ambulância particular / ambulâncias particulares | **90** | 1.900 | ~1/21 |
| transporte de pacientes | **20** | 210 | ~1/10 |
| aluguel de ambulância / ambulância de aluguel | **20** | 260 | ~1/13 |
| todo o resto (dezenas de termos) | **10 ou menos cada** | — | — |

**A RMC inteira tem ordem de grandeza de 400–600 buscas/mês** somando toda a cauda longa dos 275 termos. É um mercado pequeno em volume — o que reforça que **a saída não é comprar mais tráfego, é converter melhor o que já entra**.

### 7.2 Cluster de PREÇO — o achado mais acionável

Termos novos, todos com intenção comercial explícita, que **não estavam sendo trabalhados**:

| palavra-chave | concorrência | lance topo |
|---|---|---|
| ambulância particular preço | Média | R$ 2,91 – 12,35 |
| aluguel de ambulância valor | Alta | — |
| aluguel de ambulância preço | Média | — |
| locação de ambulância preço | — | — |
| uti movel preço | Baixa | — |
| uti móvel particular preço | Alta | R$ 1,61 – 5,32 |
| preço de ambulância | Alta | — |

> 🔑 Isso bate com o termo que **já converteu em julho**: `ambulancia particular valor`. É o padrão de maior intenção de compra e não está coberto de forma sistemática.

### 7.3 Cluster de CONTRATAÇÃO (verbo de compra)

| palavra-chave | concorrência | lance topo |
|---|---|---|
| serviço de ambulancia particular | Alta | R$ 2,26 – 12,75 |
| contratar ambulância | — | — |
| serviço de ambulância | Alta | — |
| ambulância para remoção particular | Média | — |
| serviço de remoção de pacientes | Alta | — |
| remoção de pacientes em ambulância | — | — |
| transporte de ambulância particular | Alta | R$ 2,53 – 4,74 |
| uti movel particular | Média | R$ 2,50 – 9,11 |

### 7.4 Variantes SEM ACENTO (o Google trata separado nas ideias)
`ambulancia particular` (**+22% em 3 meses e +22% YoY** — subindo mais que a versão com acento) · `uti movel` (R$ 1,89 – 10,27) · `locação de ambulancia` (Alta, R$ 3,64 – 13,14) · `remoção ambulancia` (Alta) · `ambulancia para eventos` (Média, R$ 4,13 – 19,65)

### 7.5 Ruído a negativar / ignorar
- **Fora da área:** `ambulância particular zona leste` / `zona sul` / `zona norte` (São Paulo capital), `ambulância particular porto alegre`
- **Serviço que ela não presta:** `transporte aeromédico`, `uti movel aérea`
- **Marca de concorrente novo:** `transul ambulância`
- **Já negativados hoje:** buscas por hospital, `removida`/`removidas`

---

## 8. Estratégia de conversão — recomendação

**Não mudar a estratégia de lance antes de arrumar o sinal.** Trocar "Maximizar cliques" por "Maximizar conversões" hoje faria o Google otimizar para *clique no botão de WhatsApp*, que já se provou não virar negócio. Seria pedir à máquina para trazer mais do que não funciona, com mais eficiência.

Ordem de esforço:

1. **Grátis e imediato**
   - `contato_telefone` de contagem "Todas" → **"Uma"** (hoje infla a contagem).
   - Negativas cirúrgicas dos termos de ambulância pública e de concorrente (item 7.5), em vez de cortar cidades.
2. **Barato**
   - **Código de origem no texto pré-preenchido do `wa.me`**, diferente por página ("Vim pelo site — remoção Campinas"). Uma linha de HTML por página, e a cliente passa a saber de onde veio cada conversa.
   - Subir os clusters de **preço** e **contratação** (7.2 e 7.3) em frase/exata.
3. **O que resolve de verdade**
   - **Conversão offline por GCLID:** capturar o `gclid` no site, levar junto no WhatsApp/formulário, a cliente marca numa planilha quem fechou, e a gente sobe como "Remoção Fechada". É o único jeito de o algoritmo aprender a diferença entre quem clica e quem paga. **Depende da cliente registrar os fechamentos.**
4. **Fora da mídia**
   - **Atender o telefone.** 12 ligações tocando sem resposta em 10 dias não é problema de campanha, e nenhum ajuste conserta.

---

## 9. Próximos passos

- [ ] `contato_telefone`: contagem "Todas" → "Uma"
- [ ] Negativar `"salute"`, `[transul ambulância]`, `"transporte aeromédico"`, `"zona leste"`/`"zona sul"`/`"zona norte"` (se aparecerem em termos)
- [ ] Subir cluster de preço + cluster de contratação em frase/exata
- [ ] Trocar `locação de ambulância` por (ou somar) **`aluguel de ambulância`** — o mercado usa "aluguel", que tem 2× o volume e está subindo 52%
- [ ] Adicionar variantes sem acento
- [ ] Grupo/campanha de **eventos** com R$ 8–10/dia (concorrência baixa, +200% YoY)
- [ ] Levar à cliente a evidência das 26 ligações
- [ ] Decidir sobre GCLID offline
- [ ] Reavaliar cidades em ~30 dias (não cortar agora)

## 10. Armadilhas de operação (para a próxima sessão)

- O banner do topo do Ads ("Adicionar uma forma de pagamento alternativa") **cobre o seletor de datas** — fechar no X antes de clicar.
- O relatório de **Termos de Pesquisa guarda filtro entre sessões** — conferir e limpar antes de ler. URL certa: `/aw/keywords/searchterms` (`/search-terms` dá 404).
- O Planejador aceita **no máximo 10 locais** para ideias de palavras-chave.
- A tela de configurações da campanha tem **dois botões Salvar empilhados** — o do diálogo não grava; usar o do painel e recarregar para conferir.
- Conta Ads abre no Chrome do perfil **LIFEMAIS** (`lifemaissaudee@gmail.com`), não no da RM Tech.

## 11. Ressalvas de método

- Os volumes do item 6 são do **estado de São Paulo**; os do item 7 são das **10 cidades da RMC**.
- O Planejador tem **piso de ~10 buscas/mês** e agrupa variantes — "sem volume" significa "abaixo do piso", não zero absoluto.
- Cauda longa somada pode valer mais do que cada termo isolado sugere.
- Os dados de 10/ago estavam **parciais** no momento da leitura.
