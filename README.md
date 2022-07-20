# GitHub Search

## Descrição

Projeto para fins de treinamento utilizando React para consumir a API do GitHub.

## Dependências do sistema

- [NodeJS >= v14.17.6](https://nodejs.org/en/download/)
  - NPM v6.14.15

## Estrutura

    Ecommerce-React-App
    ├── src                            (Diretório principal dos arquivos do projeto)
    │   ├── components                 (Componentes que não possuem estados, são chamados de dummy components)
    │   ├── context                    (Disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível)
    ├── README.md                      (Breve definição/Documentação)
    └── ...                            (Outros arquivos de configuração)

### Ferramentas

- [React](https://pt-br.reactjs.org/docs/getting-started.html)

- [Git](https://git-scm.com/doc)

### Montagem do ambiente de desenvolvimento

O primeiro passo é clonar o projeto utilizando o método HTTPS ou SSH.

SSH

```sh
git clone git@github.com:eosantos/github-search.git
```

HTTPS

```sh
git clone https://github.com/eosantos/github-search.git
```

### Instalar dependências do projeto

Com o comando abaixo instalamos todos os pacotes definidos no package.json para configuração do servidor local:

````sh
npm i
```2

### Acessando a aplicação

Para iniciar o projeto basta executar o comando abaixo:

```sh
npm start
````

Após a execução do comando acima basta abrir o link `http://localhost:3000`.

### Commit

Para nossos commits utilizamos a seguinte estrutura:

```
feat: mensagem curta
^--^  ^------------^
|     |
|     +-> Resumo da alteração
|
+-------> Tipos: chore, docs, feat, fix, refactor, style, or test.
```

#### Exemplos:

- `feat/feature`: (novo recurso para o usuário, não um novo recurso para script de compilação)
- `fix`: (correção de bug para o usuário, não uma correção para um script de construção)
- `docs`: (alterações na documentação)
- `style`: (formatação, ponto e vírgula faltando etc; sem alteração do código de produção)
- `refactor`: (refatorando o código de produção, por exemplo, renomeando uma variável)
- `test`: (adicionando testes ausentes, testes de refatoração; nenhuma alteração no código de produção)
- `chore`: (atualização de tarefas e etc; sem alteração do código de produção)
