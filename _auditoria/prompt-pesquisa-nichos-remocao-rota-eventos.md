# Prompt — pesquisa de nichos (remoção nas cidades · rota SP↔Campinas · eventos)

Criado em 10/ago/2026. Colar o bloco abaixo inteiro no Claude (com busca na web ligada).
Pode ser rodado de uma vez ou parte por parte (PARTE 1, 2, 3 e 4 são independentes).

---

Você é um especialista em Google Ads e pesquisa de palavras-chave para serviços de saúde e urgência no Brasil. Faça a pesquisa usando busca na web e me devolva um documento de trabalho, não um resumo genérico.

## Contexto do negócio

**Life Mais Saúde** — empresa de ambulância e atendimento pré-hospitalar, sede em Campinas-SP (Av. Guarani, 603 — Jardim Guarani). CNPJ ativo desde 2010, CNES 5755700, RT médico e RT de enfermagem registrados, alvará da Vigilância Sanitária. Site: https://lifemaissaude.com

**Serviços que ela vende:**
- Remoção / transporte de pacientes (transferência inter-hospitalar, alta hospitalar, transporte para exames, remoção domiciliar)
- Ambulância UTI móvel
- Ambulância particular / locação de ambulância
- Cobertura médica de eventos (shows, formaturas, casamentos, eventos corporativos e esportivos)
- Bombeiro civil / brigadista / área protegida para empresas
- Home care e cursos de capacitação

**Cidades onde atende hoje:** Campinas (sede), São Paulo capital, Americana, Hortolândia, Sumaré, Paulínia, Nova Odessa, Valinhos, Vinhedo, Jundiaí, Indaiatuba, Jaguariúna, Itatiba, Monte Mor, Pedreira.

**Situação da campanha (dado real, ago/2026):** uma única campanha de Pesquisa, R$ 40/dia, ~R$ 1.200/mês. Praticamente 100% do gasto está no grupo de remoção/emergência. Os grupos de Eventos e de Empresas existem mas quase não recebem impressão. Em 10 dias de agosto: R$ 396 gastos, 27 "conversões" (que são cliques em WhatsApp/telefone) e **zero remoções fechadas**.

## O que já foi aprendido nessa conta — use como filtro, não repita esses erros

1. **O mercado busca "remoção de pacientes", não "transferência inter-hospitalar".** O site usava o termo técnico e não aparecia.
2. **Busca por "telefone / número / central da ambulância de <cidade>" é gente procurando a ambulância PÚBLICA da cidade**, não serviço particular. Gerou custo e ligação errada (pessoa achando que era SAMU). Já foi negativado o padrão "central de ambulância" e a palavra-chave "emergência ambulância" foi pausada por isso.
3. **Busca contendo "hospital" é ambígua e perigosa:** "ambulância para hospital X" é lead bom, mas "hospital em campinas" / "hospitais em hortolândia" é gente procurando um hospital. Já negativado com exatas e a frase "hospitais em".
4. **Marcas de concorrentes que aparecem e consomem orçamento:** Helpmóvel, Medcar, Medicar, Removida, Salute, Lifecor, Anjos, JC Remoções, Sermedica, InterHelp, CAP, Starex.
5. **Termos que já converteram:** "ambulancia particular valor", "ambulância artur nogueira telefone".
6. Metade a dois terços do gasto vai para "outros termos de pesquisa" (ocultos), efeito de correspondência ampla.

---

## PARTE 1 — Vocabulário de busca do nicho de REMOÇÃO nas cidades atendidas

Levante como as pessoas realmente pesquisam esse serviço no Brasil, especificamente na região metropolitana de Campinas. Cubra estes ângulos:

- Quem contrata: familiar de paciente idoso/acamado, hospital/clínica, plano de saúde, casa de repouso, assistente social hospitalar.
- Momentos de compra: alta hospitalar, transferência entre hospitais, ida a exame/consulta, retorno para casa, remoção de UTI, transporte de paciente acamado, transporte com oxigênio.
- Variações de linguagem: "remoção", "transporte de paciente", "ambulância particular", "ambulância simples", "maca", "transporte de idoso", "ambulância para levar paciente", "van para paciente", "transporte deitado".
- Modificadores comerciais: preço, valor, quanto custa, orçamento, contratar, empresa, particular, 24h, plantão.

**Entregue:**

**Tabela 1.1 — palavras genéricas (sem cidade)** com colunas: `palavra-chave | intenção | tipo de correspondência sugerido | por que`

A coluna **intenção** deve classificar cada termo em exatamente uma destas categorias:
- `A` compra serviço particular pago
- `B` procura serviço público/gratuito (SAMU, prefeitura, bombeiros)
- `C` procura emprego, curso ou concurso
- `D` procura marca de concorrente
- `E` informacional (quer entender o assunto, não contratar agora)

**Tabela 1.2 — combinações por cidade:** monte o padrão `<termo raiz> + <cidade>` para as 15 cidades da lista, mas **só para as raízes classificadas como A**. Entregue pronto para colar no Google Ads, uma por linha, com a sintaxe de correspondência (`"frase"` ou `[exata]`).

**Tabela 1.3 — negativas recomendadas**, agrupadas por motivo (público/gratuito, emprego, concorrente, hospital-como-destino-de-busca, fora de escopo), com o tipo de correspondência e um aviso explícito quando a negativa tiver risco de bloquear busca boa.

---

## PARTE 2 — Teste de hipótese: rota interurbana São Paulo ↔ Campinas

A hipótese a testar: **existe demanda de busca para transporte de paciente ENTRE cidades**, especificamente São Paulo capital ↔ Campinas, e essa demanda é grande o suficiente para justificar página e grupo de anúncios próprios.

Investigue:
- Como as pessoas escrevem esse tipo de busca ("ambulância de são paulo para campinas", "transporte de paciente de sp para o interior", "remoção intermunicipal", "ambulância entre cidades", "transferência de hospital de são paulo para campinas", "ambulância interestadual", "transporte de paciente longa distância").
- Existe demanda no sentido inverso (Campinas → São Paulo, para tratamento em hospitais de referência como Einstein, Sírio, HC-FMUSP, A.C.Camargo, INCOR)? Esse fluxo é plausível para pacientes oncológicos e cardíacos do interior.
- Quem já ocupa essa busca hoje: quais empresas aparecem no orgânico e quais anunciam. Existe página dedicada a rota, ou todos usam página genérica?
- Existe conteúdo de intenção informacional que alimenta essa busca ("quanto custa uma ambulância de SP para Campinas", "plano de saúde cobre remoção entre cidades", "quem paga a transferência inter-hospitalar")?
- Qual é o ticket plausível dessa corrida versus uma remoção urbana, e o que isso muda na conta de mídia.

**Entregue:** um veredito explícito — **existe nicho ou não** — sustentado nas evidências que você encontrou; a lista de palavras-chave da rota; o esqueleto da página que precisaria existir no site (title, H1, seções, FAQ); e o que seria necessário para testar isso com orçamento pequeno.

---

## PARTE 3 — Nicho de CONTRATOS PARA EVENTOS (prioridade declarada da cliente)

A cliente prefere esse nicho: ticket maior, agenda previsível, contrato assinado, e não depende de emergência. Hoje esse grupo de anúncios praticamente não recebe impressão.

Investigue:
- **Quem é o comprador** e como cada um pesquisa de forma diferente: produtor de show, buffet, cerimonialista/assessoria de casamento, comissão de formatura, faculdade, RH de empresa, condomínio, igreja, prefeitura, organizador de prova esportiva (corrida, ciclismo, futebol amador), casa de festas.
- **Palavras de contratação:** "ambulância para evento", "cobertura médica para eventos", "ambulância para show", "posto médico para evento", "equipe de resgate para evento", "ambulância para formatura", "ambulância para casamento", "ambulância para corrida de rua", "remoção para eventos esportivos", "brigadista para evento", "empresa de segurança médica para eventos".
- **Busca movida por exigência legal** — este é o ponto-chave do nicho: quem descobre que precisa de ambulância por causa de norma. Levante o que se pesquisa aqui ("é obrigatório ter ambulância em evento", "exigência de ambulância corpo de bombeiros evento", "AVCB evento ambulância", "quantas ambulâncias por número de pessoas em evento", "laudo/alvará para evento São Paulo", "normas para evento com público"). Verifique quais são as normas realmente aplicáveis no estado de São Paulo e em Campinas, e cite a fonte.
- **Sazonalidade:** meses de pico de formatura, casamento, festa junina, réveillon, corridas de rua, eventos corporativos.
- **Concorrência:** quem anuncia e quem ranqueia para essas buscas na região de Campinas e em São Paulo; se usam página dedicada por tipo de evento.
- **Modelo de contratação:** avulso por evento versus contrato anual/recorrente com produtora, faculdade ou prefeitura — e como isso muda a palavra-chave (contrato, licitação, credenciamento).

**Entregue:** tabelas no mesmo formato da PARTE 1 (com a coluna de intenção A–E), a estrutura de grupos de anúncios sugerida, sugestões de título e descrição de anúncio para os 3 públicos mais promissores, e o que falta no site para essas buscas converterem.

---

## PARTE 4 — Comparação e recomendação

Compare **rota interurbana SP↔Campinas** e **contratos para eventos** lado a lado, usando critérios explícitos e declarando o peso de cada um:

| critério | rota SP↔Campinas | eventos |
|---|---|---|
| volume de busca (banda qualitativa) | | |
| clareza de intenção comercial | | |
| concorrência e CPC provável | | |
| ticket médio estimado | | |
| previsibilidade / recorrência | | |
| esforço para entrar (página, anúncio, prova social) | | |
| tempo até o primeiro resultado | | |
| risco de repetir o problema atual (lead que não fecha) | | |

Termine com **uma recomendação única**: onde colocar o primeiro incremento de orçamento, quanto, por quanto tempo, e qual número decide se continua ou para. Se a resposta honesta for "nenhuma das duas antes de resolver X", diga isso.

---

## Regras de saída (obrigatórias)

1. **Não invente volume de busca mensal.** Você não tem acesso ao Planejador de Palavras-Chave. Use bandas qualitativas (alto / médio / baixo / nicho) e **diga em que evidência se baseou** (sugestões do autocomplete, "pessoas também perguntam", quantidade de anunciantes, existência de páginas dedicadas de concorrentes, fóruns). Marque toda estimativa como estimativa.
2. **Cite a fonte** de qualquer afirmação sobre norma, exigência legal ou dado de mercado. Se não encontrar fonte, diga que não encontrou em vez de preencher.
3. Toda palavra-chave entregue precisa ter a classificação de intenção A–E. Palavras B, C e D vão para a lista de negativas, não para a de keywords.
4. Entregue as listas **prontas para colar no Google Ads**, uma por linha, com a sintaxe de correspondência.
5. Escreva em português do Brasil. Priorize o que é acionável esta semana sobre o que é interessante de saber.
6. Onde a evidência for fraca, diga que é fraca. Prefiro um "não sei" a um número bonito e inventado.
