# react-native-template

## Instalando eslint e Prettier
Instalar as depêndencias `yarn add eslint eslint-config-prettier prettier @typescript-eslint/eslint-plugin @react-native-community/eslint-config` e copiar os arquivos .prettierrc.js e .eslintrc.js

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