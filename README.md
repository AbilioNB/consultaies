# Consulta Ies

## Descrição
A página Consulta Ies, tem como objetivo mostrar um perfil de informações da instituição de ensino superior solicitada pelo usuário.  Onde o usuário ao utilizar a plataforma vai poder visualizar quais cursos estão sendo lecionados naquela instituição além de informações sobre as notas do MEC atribuídas, e também trazendo textos explicativos sobre o que são esses indicadores de qualidade utilizados pelo MEC.

O objetivo da API é trazer os dados direto da fonte do MEC  fazendo com que a informação apresentada seja diretamente alinhada com a que é avaliada pelo órgão regulador.

## Usuários
* Qualquer pessoa que deseje procurar informações sobre uma instituição de ensino pública ou privada. 

## Funcionalidades
* Buscar e listar instituições pelo nome;
* Receber informações sobre curso, campus e notas da instituição;
* Informações sobre as notas da instituição;
* Apresentar ilustrativamente a localização da instituição;




## Decisões Técnicas:

### Front-End: [Angular]
* Framework robusto com gerenciamento de rotas;
* Carregamento de componentes sob demanda;
* Componentes prontos e customizáveis.

## Back-End:
* Framework de desenvolvimento de API REST em Python.

## Para Executar

### Executando pelo docker-compose
Observação: Importante ter instalado o Docker e Docker-compose

1- Basta clonar o repositorio e acessar a pasta consultaies-FrontEnd<br>
2- Executar o comando **docker-compose up -d** no console do visualcode ou quaisquer outro console de sistema.<br>
3- Acessar a ferramenta pelo endereço:
> localhost:4200

## Equipe:
* Abílio Nogueira 
* Gabriel Vinicius
* Tarcísio Costa
