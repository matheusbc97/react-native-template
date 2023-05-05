# react-native-template

## Objetivo do Repositório
O objeto do repositório é fornecer um guia de como montar uma boa estrutura utilizando o React Native.

## Formatação de código (Eslint e Prettier)

### O que é ESLint?
ESLint é uma ferramenta de análise de código-fonte para JavaScript que ajuda a identificar e corrigir problemas de código, como erros de sintaxe, problemas de formatação e práticas inseguras, seguindo as melhores práticas do JavaScript. É amplamente utilizado em projetos de desenvolvimento JavaScript para manter a qualidade e a consistência do código.

Além disso, o ESLint pode ser integrado com várias ferramentas de desenvolvimento, como editores de código, sistemas de controle de versão e ferramentas de integração contínua (CI), tornando a análise de código mais fácil e automatizada.

### O que é prettier?
Prettier é uma ferramenta de formatação de código que ajuda a manter a consistência e legibilidade do código em projetos de software. Ele funciona formatando o código automaticamente com base em regras pré-definidas, como estilo de indentação, uso de espaços e quebras de linha.

O uso do Prettier ajuda a manter a consistência do código ao longo do projeto e também economiza tempo, pois não é necessário gastar tempo formatando manualmente o código.

### Instalação
Instalar as depêndencias `yarn add eslint eslint-config-prettier prettier @typescript-eslint/eslint-plugin @react-native-community/eslint-config` e copiar os arquivos .prettierrc.js e .eslintrc.js

### Links sobre ESLint e Prettier
Site ESLint - https://eslint.org/  
Site Prettier - https://prettier.io/

## Navegação (React Navigation)
Seguir os passos em https://reactnavigation.org/docs/getting-started/

## Instalando Husky e Commitlint
Seguir os passos em https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup

### Commits semanticos (Usando @commitlint/config-conventional)
Os commits devem ser feitos no seguinte formato: `<type>(<scope>): <subject>` onde `<scope>` é opcional

`feat`: (nova funcionalidade para o usuário, não uma nova funcionalidade para o script de build).   
`fix`: (correção de bug para o usuário, não uma correção para o script de build).  
`docs`: (alterações na documentação).  
`style`: (formatação, ponto e vírgula faltando, etc; sem alteração de código de produção).  
`refactor`: (refatoração de código de produção, por exemplo, renomeando uma variável).  
`test`: (adição de testes faltantes, refatoração de testes; sem alteração de código de produção).  
`chore`: (Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.).  
`perf`: Uma alteração de código que melhora o desempenho;  
`ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs);  
`build`: Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm)  
`env`: basicamente utilizado na descrição de modificações ou adições em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração de containers.  

## Gerenciando Formulários (React Hook Form e Zod)

### O que é React Hook Form?
React Hook Form é uma biblioteca para React que ajuda a construir e validar formulários de maneira fácil. Ele usa Hooks do React para gerenciar o estado do formulário e fazer validações, oferecendo recursos avançados, como validação em tempo real e controle do estado do formulário. O uso dessa biblioteca pode economizar tempo e esforço no desenvolvimento de formulários.

### O que é Zod?
Zod é uma biblioteca de validação de dados para TypeScript e JavaScript que ajuda a garantir a integridade e segurança dos dados em um projeto. Ele permite definir esquemas de validação de dados para objetos, matrizes, números, strings e muito mais.


