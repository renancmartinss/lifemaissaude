# Consultoria SEO — Life Mais Saúde vs. Mercado de Campinas/SP

**Cliente:** Life Mais Saúde (lifemaissaude.com) · Ambulância, cobertura de eventos, remoção e APH · Sede Campinas-SP
**Data:** Junho/2026 · **Concorrente-alvo:** LifeCor Ambulâncias

> **Sobre as métricas:** não havia API de keyword tool (Ahrefs/SEMrush/DataForSEO) nem Search Console conectados na sessão de análise. Volumes, dificuldade (KD) e autoridade de domínio (DA) são **estimativas profissionais** (`~est.`) baseadas no mercado local, na estrutura observada de cada site e nas SERPs reais coletadas — não em dados medidos.

---

## 1. Principais concorrentes orgânicos

| # | Concorrente | URL | Autoridade ~est. | Conteúdo | Estrutura SEO | Pontos fortes | Pontos fracos |
|---|---|---|---|---|---|---|---|
| 1 | LifeCor | lifecorambulancias.com.br | 22 | ~25 pgs | Páginas por cidade `/atendemos/sao-paulo/[cidade]`, 11 cidades | Cobre + cidades, nichos (pet, covid) | Sem blog, PHP antigo, schema fraco, sem informacional |
| 2 | Anjos Parceiros da Vida | anjosparceirosdavida.com.br | 30 | 100+ artigos | Blog gigante + serviço/cidade | Volume de conteúdo, cauda longa | Sem schema, conteúdo raso, UX datada |
| 3 | Anjos Ambulâncias | anjosambulancias.com.br / ambulanciacampinas.com.br | 25 | ~30 pgs | Multi-domínio (EMD) | EMD Campinas, humanizado | Conteúdo duplicado entre domínios |
| 4 | 10Seg Remoções | 10segremocoes.com.br | 24 | ~20 pgs | Foco remoção/eventos, 0800 | Marca, 0800 | Sem blog, schema fraco |
| 5 | CAP Emergências | centroaureliopassos.com / capemergencias.com | 26 | ~30 pgs | Páginas keyword-focused | Páginas bem feitas | Dois domínios competindo |
| 6 | Med Ambulâncias | medambulancias.com.br | 20 | ~15 pgs | Básica | Marca limpa | Pouco conteúdo |
| 7 | JC Ambulâncias | jcambulancias.com.br | 21 | ~15 pgs | Foco UTI/remoção 24h | Posicionamento UTI | Site fino |
| 8 | REMOVIDA | removidacampinas.com.br | 19 | ~12 pgs | EMD básica | Nome geo | Conteúdo mínimo |
| 9 | Angels Life | angelslifeambulancias.com.br | 23 | ~30 pgs | Página de clientes/portfólio | Prova social de eventos | Plataforma engessada |
| 10 | Grupo Santana (Sermedica) | gruposantanacampinas.com.br | 28 | ~40 pgs | Grupo grande | Autoridade de grupo | Ambulância é sub-seção |
| 11 | Interhelp | interhelpambulancia.com | 22 | ~20 pgs | SP + Campinas | Cobre SP+Campinas | Foco SP |
| 12 | Instituto Recomeçar | institutorecomecar.org | 33 | ~80 pgs | Forte (.org) | Alta autoridade, remoção psiquiátrica | Clínica, intenção parcial |
| 13 | Brasil Emergências Médicas | brasilemergenciasmedicas.com.br | 27 | ~50 pgs | Conteúdo de legislação | Domina queries informacionais | Mais SP que Campinas |
| 14 | V&V Remoções | vvremocoes.com.br | 26 | ~40 pgs | Blog + eventos/legislação | Artigos de intenção | Foco SP |
| 15 | Promed Santa Angela | promedsa.com.br | 29 | ~35 pgs | Foco eventos grandes | Referência eventos + brigadistas | SP capital |
| 16 | Torre Emergências | torreemergencias.com.br | 31 | ~40 pgs | Eventos de grande porte | Portfólio premium (F1, Carnaval) | SP capital, premium |
| 17 | MedRescue | medrescue.com.br | 28 | ~30 pgs | Segmentado por setor | Segmentação setorial | Nacional |
| 18 | Ame Remoções | ameremocoes.com.br | 24 | ~25 pgs | Serviço claro | Cobertura eventos | SP |
| 19 | Dom Bosco Remoções | domboscoremocoes.com.br | 23 | ~25 pgs | Página eventos | Foco eventos | SP capital |
| 20 | CD / SD Remoções | cdremocoeseeventos.com.br / sdremocoes.com.br | 18 | ~15 pgs | Preço-âncora | Atrai por preço | Conteúdo fino |

**Brecha estratégica:** ninguém combina conteúdo informacional forte + schema técnico + páginas locais profundas. Quem tem conteúdo tem técnico fraco; quem tem técnico não tem blog. É a brecha da Life Mais Saúde.

---

## 2. Análise SEO da Life Mais Saúde

| Item | Status | Diagnóstico |
|---|---|---|
| Title | 🟢 | Bons; incluir keyword-dinheiro mais cedo na home |
| Meta description | 🟢 | Bem escritas, com telefone e CTA |
| H1 | 🟡 | Home sem keyword ("Quando cada segundo faz a diferença") → reescrever |
| H2/H3 | 🟢 | Hierarquia semântica limpa |
| URLs | 🟢 | Limpas, sem `.html`, keyword-rich |
| Sitemap | 🟡 | Incompleto: falta Campinas (sede!), Hortolândia, Sumaré, Americana |
| Robots.txt | 🟢 | Libera GPTBot/Perplexity/Google-Extended + sitemap |
| Schema | 🟢 | EmergencyService+MedicalBusiness, NAP, CNPJ/CNES/CRM. Falta `Service` por página + `FAQPage` na home |
| CWV | 🟡 | Arquitetura leve; medir carrossel de 26 imagens (LCP/CLS) |
| Mobile | 🟢 | Responsivo, viewport ok |
| Velocidade | 🟡 | Validar peso das imagens `.jpeg` |
| Indexação | 🟢 | Renderiza conteúdo completo, GA4 instalado; confirmar URLs no GSC |
| GEO/llms.txt | 🟢 | llms.txt estruturado — vantagem rara |

**Correções on-page (ordem):** 1) H1 da home com keyword · 2) criar página de Campinas · 3) imagens lazy/webp/dimensões · 4) schema Service + FAQPage · 5) atualizar sitemap · 6) iniciar blog · 7) interlinking em silo.

---

## 3. Palavras-chave (gap) — valores `~est.`

| Palavra-chave | Volume/mês | KD | Tenho página? | Concorrente tem? |
|---|---|---|---|---|
| ambulância Campinas | 1.300 | 28 | 🟡 home | ✅ CAP, Anjos, LifeCor |
| ambulância particular Campinas | 720 | 30 | ❌ | ✅ CAP, Interhelp |
| ambulância para eventos Campinas | 480 | 25 | 🟡 genérica | ✅ Angels Life, Anjos |
| ambulância UTI Campinas | 390 | 27 | ❌ | ✅ JC, Interhelp |
| ambulância 24 horas Campinas | 320 | 26 | 🟡 menção | ✅ JC, 10Seg |
| remoção de pacientes Campinas | 590 | 29 | 🟡 transf. | ✅ 10Seg, Recomeçar |
| locação de ambulância Campinas | 260 | 24 | ❌ | ✅ Anjos |
| cobertura médica eventos Campinas | 210 | 23 | 🟡 | ✅ Anjos |
| ambulância para shows Campinas | 90 | 20 | ❌ | ✅ Anjos |
| ambulância para formaturas Campinas | 110 | 21 | ❌ | ✅ Angels Life |
| ambulância eventos corporativos Campinas | 70 | 19 | ❌ | ✅ MedRescue, Promed |
| ambulância Hortolândia/Sumaré/Americana | 110–210 | 20–24 | ❌ | ✅ LifeCor |
| ambulância para casamento | 170 | 20 | ❌ | ✅ Anjos |
| ambulância psiquiátrica Campinas | 210 | 26 | ❌ | ✅ Recomeçar |
| legislação ambulância eventos SP | 320 | 22 | ❌ | ✅ Brasil Emergências, V&V |
| é obrigatório ter ambulância em evento | 260 | 18 | ❌ | ✅ V&V |
| quantas ambulâncias por público | 140 | 17 | ❌ | ✅ Brasil Emergências |

---

## 4. Gap de conteúdo

**Serviços/nicho faltando:** Ambulância UTI · Ambulância particular · Locação/standby · Shows · Formaturas · Casamentos · Eventos corporativos · Eventos esportivos · Remoção psiquiátrica · Remoção de idosos/acamados · Locação de equipamentos · Legislação/obrigatoriedade (pilar) · Portfólio/clientes.

**Cidades faltando:** Campinas (sede!), Hortolândia, Sumaré, Americana, Piracicaba, Atibaia, Sorocaba.

**Estrutural:** Blog inteiro (0 vs. 100+ da Anjos).

---

## 5. Local SEO

**Fundamentos (impacto Muito Alto):** GBP otimizado/verificado · NAP consistente · citações locais (Apontador, Bing Places, Apple Maps, GuiaMais) · 30+ avaliações em 90 dias.

**Páginas locais a criar** (modelo = página de Paulínia, com conteúdo único):

| Cidade | Prioridade | Ângulo único |
|---|---|---|
| Campinas | 🔴 Muito Alta (sede) | Unicamp, hospitais (Mário Gatti, PUCC, HC), Taquaral, Expo Dom Pedro |
| Hortolândia | 🔴 Alta | Distritos industriais |
| Sumaré | 🔴 Alta | Anhanguera/Bandeirantes, indústria |
| Americana | 🟠 Alta | Têxtil, eventos |
| Piracicaba | 🟡 Média | expandir cobertura |
| Atibaia | 🟡 Média | eventos ao ar livre |

> **Quality gate:** manter 60%+ de conteúdo único por página local. Não clonar.

---

## 6. Blog — 100 artigos (hub-and-spoke)

**Cluster 1 — Ambulância para eventos (19):** guia completo (pilar), quantas ambulâncias por público, quanto custa, básica vs UTI, shows, formaturas, casamentos, corporativo, esportivos, rodeios, festivais, posto médico vs ambulância, checklist organizadores, como contratar em Campinas, documentos exigidos, APH em eventos, erros comuns, plano de contingência, feiras/congressos.

**Cluster 2 — Legislação/obrigatoriedade (12):** é obrigatório? (pilar), legislação SP 2026, lei municipal Campinas, ANVISA, CFM, AVCB/alvará, responsabilidade civil, ART/laudo, Portaria 2048, tipos A/B/C/D, exigência por porte, multas.

**Cluster 3 — Remoção/transferência (12):** guia (pilar), custo, inter-hospitalar, psiquiátrica, idosos/acamados, UTI entre hospitais, infectocontagiosa, alta hospitalar, casa de repouso, quimioterapia, aeromédica vs terrestre, documentos.

**Cluster 4 — Ambulância UTI/equipamentos (9):** o que é (pilar), tipo B vs D, equipamentos, equipe, quando usar, ventilador/monitor/DEA, locação UTI empresas, UTI neonatal/pediátrica, aluguel de equipamentos.

**Cluster 5 — Primeiros socorros (15):** guia (pilar), RCP, Heimlich, parada cardíaca, desmaio, convulsão, AVC, queimaduras, fraturas, hemorragias, engasgo em bebês, insolação, kit, DEA, afogamento.

**Cluster 6 — Bombeiro civil/brigada (10):** o que faz (pilar), civil vs brigadista, brigada na empresa, quando o evento precisa, NR-23, AVCB, plano de abandono, indústrias/polos, prevenção em eventos, Lei 11.901.

**Cluster 7 — Segurança em eventos (8):** guia organizadores (pilar), plano de emergência, dimensionar equipe, insolação/mal súbito, acessibilidade, comunicação de emergência, triagem/fluxo, eventos esportivos.

**Cluster 8 — Cursos/capacitação (6):** primeiros socorros vale a pena (pilar), curso APH, BLS/ACLS, brigada, treinamento NR para empresas, certificação socorrista.

**Cluster 9 — Home care (6):** guia (pilar), custo, vs internação, enfermagem 24h, paciente acamado, pós-cirúrgico.

**Cluster 10 — Local/Campinas (3):** ambulância em Campinas: como contratar (pilar local), eventos de Campinas e cobertura exigida, hospitais de Campinas.

---

## 7. Plano para ultrapassar a LifeCor (6 meses)

- **Técnico:** H1 home, CWV (webp/lazy/dimensões), Service+FAQPage schema, sitemap, interlinking em silo. *(já à frente da LifeCor em schema/URLs)*
- **Conteúdo:** igualar cidades (~6 novas) + 13 páginas de serviço/nicho.
- **Blog:** 40 dos 100 artigos em 6 meses (clusters 1–4).
- **Backlinks `~est.`:** de ~5–10 para ~30–40 (GBP/citações, produtoras/buffets/casas de festa, guias de fornecedores, imprensa local, ABRAMEDE, hospitais/clínicas).
- **Páginas:** ~21 novas. **Artigos:** 40 (~6–7/mês).

**Veredito:** ultrapassar a LifeCor em cidade/remoção/eventos em Campinas é realista em 6 meses (DA dela baixa, técnico da Life superior). SP capital (Torre/Promed) é horizonte mais longo.

---

## 8. Roadmap

**7 dias:** 🔴 GBP + NAP · 🔴 página de Campinas · 🔴 indexação GSC + sitemap · 🟠 H1 home · 🟠 medir CWV.
**30 dias:** 🔴 cidades Hortolândia/Sumaré/Americana · 🔴 serviços UTI/Particular/Locação · 🟠 imagens webp/lazy · 🟠 Service+FAQPage schema · 🟠 8 artigos · 🟡 10 citações + 10 avaliações.
**90 dias:** 🔴 nichos shows/formaturas/casamento/corporativo/esportivo · 🔴 pilar legislação · 🟠 portfólio/clientes · 🟠 +20 artigos · 🟠 10–15 backlinks · 🟡 Piracicaba/Atibaia + remoção psiquiátrica/idosos.
**180 dias:** 🔴 40 artigos · 🟠 ~21 páginas no ar · 🟠 30–40 referring domains · 🟠 30+ avaliações · 🟡 GEO (FAQs, llms.txt) · 🟢 vídeos.

---

## 9. Estimativa de crescimento (`~est.`)

| Período | Tráfego orgânico/mês | Premissas |
|---|---|---|
| Atual | ~150–400 | 16 páginas, GBP não otimizado, sem blog |
| 6 meses | ~1.200–2.500 | +21 páginas, +40 artigos, GBP forte, 30+ backlinks |
| 12 meses | ~4.000–8.000 | 100 artigos, autoridade consolidada, top 3 eventos Campinas |

---

## 10. As 20 ações mais importantes (prioridade)

1. Google Business Profile otimizado e verificado.
2. Criar a página de Campinas (sede, maior volume).
3. Confirmar indexação no GSC + sitemap atualizado.
4. Reescrever H1 da home com keyword.
5. Página Ambulância UTI.
6. Página Ambulância Particular Campinas.
7. Página de Locação de Ambulância.
8. Cidades faltantes: Hortolândia, Sumaré, Americana.
9. Otimizar CWV/imagens (webp + lazy + dimensões).
10. Schema Service + FAQPage por página.
11. Nichos de evento: shows, formaturas, casamento, corporativo, esportivo.
12. Página-pilar de legislação/obrigatoriedade.
13. Iniciar blog com 4 artigos-pilar.
14. Página de portfólio/clientes de eventos.
15. 30+ avaliações no GBP.
16. Citações locais NAP.
17. Backlinks de parceiros de eventos.
18. Interlinking em silo.
19. Ritmo de 6–7 artigos/mês.
20. GEO/IA: expandir llms.txt e FAQs citáveis.

---

*Relatório gerado por consultoria SEO assistida por IA. Métricas marcadas `~est.` são estimativas, não medições. Conectar Google Search Console + keyword tool para números reais.*
