# Ligando o formulário à Planilha Google (grátis)

1. Entre no Google com a conta **do organizador** (com verificação em duas etapas ligada) e crie uma planilha nova: "Festival Origens – Contatos".
2. Menu **Extensões → Apps Script**. Apague o conteúdo e cole todo o arquivo `apps-script/Code.gs`. Salve.
3. **Implantar → Nova implantação → Tipo: Aplicativo da Web**.
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
   (o endereço precisa ser público para o site enviar; ninguém consegue *ler* a planilha por ele).
4. Autorize quando o Google pedir e copie o endereço terminado em `/exec`.
5. No GitHub: **Settings → Secrets and variables → Actions → Variables**, crie `VITE_FORM_ENDPOINT` com esse endereço. Para testar local, coloque no arquivo `.env`.
6. Refaça o deploy. Envie um cadastro de teste: uma linha deve aparecer na aba **Contatos**.

Cuidados com a planilha: não compartilhe com "qualquer pessoa com o link"; dê acesso só a quem vai usar; revise quem tem acesso a cada campanha; apague linhas quando houver pedido de exclusão.
Se alterar o `Code.gs`, é preciso **Implantar → Gerenciar implantações → editar → Nova versão**.
