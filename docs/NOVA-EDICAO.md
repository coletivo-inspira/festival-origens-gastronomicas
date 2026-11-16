# Como cadastrar uma nova edição (o site muda sozinho)

O site decide o que mostrar **pela data**, lendo os arquivos de `src/data/editions/`:

| Situação | O que o site mostra |
|---|---|
| Existe edição que ainda não começou | Topo "Próxima edição" com contagem regressiva, local, "Ir para o local". Mostra programação, expositores, hotel etc. **se você preencheu**; senão, "Mais informações em breve" + cadastro |
| Edição acontecendo (entre `start` e `end`) | "Acontecendo agora" + o que está rolando |
| Nenhuma edição futura | Site institucional: "Obrigado", sobre, retrospectiva da última edição, edições anteriores, FAQ e cadastro |

## Passo a passo
1. Copie `src/data/editions/_modelo.ts` para `src/data/editions/AAAA-MM-cidade.ts` (ex.: `2026-12-sete-lagoas.ts`).
2. Preencha. **Só `id`, `title`, `start`, `end` e `venue` são obrigatórios**; o resto aparece quando você preencher (programação, expositores, hotel, horários por dia, etc.).
3. `git add . && git commit -m "Nova edição" && git push`. O deploy roda sozinho.
4. O site também é reconstruído **todo dia às 03h** (GitHub Actions), então o HTML acompanha a data mesmo sem novo commit. No navegador a troca de fase acontece na hora, pelo relógio.

## Dicas
- Datas com fuso: `2026-12-12T12:00:00-03:00`.
- Horário de show no formato `'19h40'`. Atração principal: `headliner: true`.
- Edição antiga sem detalhes? Cadastre só o básico (nome, datas, local e uma frase em `summary`): ela entra na linha do tempo e ganha página em `/edicoes/<id>`.
- Fotos: `src/assets/media/edicoes/<id>/` (aparecem na página da edição e na retrospectiva).
- Dados incertos: marque `verify: true` para lembrar de confirmar.
- Para ver como o site fica numa data qualquer (teste local de build):
  `PRERENDER_NOW=2026-12-12T15:00:00-03:00 npm run build` (Linux/Mac) ou, no PowerShell, `$env:PRERENDER_NOW='2026-12-12T15:00:00-03:00'; npm run build`.
