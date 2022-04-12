Checkpoint 2 

-- Ver tarefas pendentes.
-- Ver tarefas terminadas.
-- Marcar uma tarefa como terminada.
-- Criar tarefas novas.
-- Visualizar a data de criação de uma tarefa.

1) login e cadastro
    - normalizar e validar as informações 
        - campos obrigatorios (HTML) OK 
        - verificar "types" (HTML) OK
        - regex p/ senha (HTML) OK
        - colocar tudo em minusculo - toLowerCase() (JS) 
        - verificar se "senha" e "repetir senha" sao iguais (JS)
    - manter cadastro do usuario
        - utilizar localStorage (?)

3) pagina de tarefas 
    - item exemplo
    - item exemplo 2 


    # Projeto To Do - Checkpoint II

Tarefas:

- Login: Validar os campos (todos obrigatórios)
  - [x] Adicionar attr required nos campos
  - [x] Obter os valores dos campos (no submit)

Melhorias:

- Identificar campos invalidos com CSS (ex. borda vermelha)

---

Estrutura do projeto

Nosso projeto é baseado em HTML, sem utilização de modulos ou bundlers.

Pastas:

- assets: Contem os arquivos do projeto como imagens, fontes e vetores.
- scripts: Contem os arquivos javascript do projeto. Separados por tela.


Criar página login (Mesmo código, mas no fetch users/login)