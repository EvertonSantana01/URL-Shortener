# URL Shortener

Este projeto é um encurtador de URLs construído com Node.js e Express, utilizando o MongoDB como banco de dados. Ele permite que os usuários encurtem URLs longas para um formato mais gerenciável e fácil de compartilhar.

## Funcionalidades

- **Encurtamento de URL**: Converta URLs longas em versões curtas e amigáveis.
- **Redirecionamento**: Usuários são redirecionados para a URL original ao acessar a URL encurtada.
- **Persistência de Dados**: URLs encurtadas e suas URLs originais são armazenadas no MongoDB para acesso rápido e confiável.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js que facilita a criação de aplicações web e APIs.
- **MongoDB**: Banco de dados NoSQL orientado a documentos, que armazena dados em formato JSON-like.
- **Mongoose**: Biblioteca do MongoDB para modelagem de dados em ambiente Node.js.
- **Typegoose**: Facilita a utilização do Mongoose com TypeScript, fornecendo tipos e classes para modelar os dados.

## Como Executar

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório:

git clone <URL_DO_REPOSITORIO>

2. Instale as dependências:

npm install

3. Inicie o servidor:

npm run dev


A aplicação estará disponível em `http://localhost:5000`.
