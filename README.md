# Berneck Frontend

## Dependências

Projeto construído utilizando Node 14 LTS.
Projeto desenvolvido usando npm como gerenciador de pacotes.

## Initial Setup

Inicie instalando as dependências:

```bash
$ npm install
```

Depois, adicione os hooks de verificação husky com o comando:

```bash
$ npm run prepare
```

Caso algum problema esteja ocorrendo com os hooks, comunique a equipe e, caso seja extremamente necessário, desative os hooks com o comando:

```bash
$ npm run unprepare
```

## Inciando a aplicação

### Development

Para iniciar a aplicação em ambiente de desenvolvimento:

```bash
$ npm run dev
```

### Build

Para iniciar a aplicação em ambiente de produção:

```bash
$ npm run build
$ npm run start
```


## Storybook
Visualização de componentes

```bash
$ npm run storybook
```


## React Testing Library + Jest
DOM testing library + Jest

```bash
$ npm run test --watch
```


## Create Automatic Component
Criação de novo componente

```bash
$  npm run generate
```
