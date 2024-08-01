# Salão API

## Descrição
Salão API é uma API RESTful desenvolvida em TypeScript, projetada para gerenciar as operações de um salão de beleza. A API permite a gestão de clientes, serviços, agendamentos e funcionários, fornecendo endpoints para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) nesses recursos.

## Funcionalidades
- Gerenciamento de clientes
- Gerenciamento de serviços
- Gerenciamento de agendamentos
- Gerenciamento de funcionários
- Autenticação e autorização de usuários

## Tecnologias Utilizadas
- TypeScript
- Node.js
- Express
- PostgreSQL
- JWT (JSON Web Token) para autenticação
- Mongoose para modelagem de dados

## Instalação e Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/brunorafael89/salao-api.git
   cd salao-api
   ```

2. Instale as dependências:
   ```bash
   npm install --global yarn
   npm install express
   ```

## Executando o Projeto
1. Inicie o servidor:
   ```bash
   npm start
   ```

2. A API estará disponível em:
   ```
   http://localhost
   ```

## Endpoints
### Clientes
- `GET /clientes` - Listar todos os clientes
- `GET /clientes/:id` - Obter um cliente pelo ID
- `POST /clientes` - Criar um novo cliente
- `PUT /clientes/:id` - Atualizar um cliente pelo ID
- `DELETE /clientes/:id` - Deletar um cliente pelo ID

### Serviços
- `GET /servicos` - Listar todos os serviços
- `GET /servicos/:id` - Obter um serviço pelo ID
- `POST /servicos` - Criar um novo serviço
- `PUT /servicos/:id` - Atualizar um serviço pelo ID
- `DELETE /servicos/:id` - Deletar um serviço pelo ID

### Agendamentos
- `GET /agendamentos` - Listar todos os agendamentos
- `GET /agendamentos/:id` - Obter um agendamento pelo ID
- `POST /agendamentos` - Criar um novo agendamento
- `PUT /agendamentos/:id` - Atualizar um agendamento pelo ID
- `DELETE /agendamentos/:id` - Deletar um agendamento pelo ID

### Funcionários
- `GET /funcionarios` - Listar todos os funcionários
- `GET /funcionarios/:id` - Obter um funcionário pelo ID
- `POST /funcionarios` - Criar um novo funcionário
- `PUT /funcionarios/:id` - Atualizar um funcionário pelo ID
- `DELETE /funcionarios/:id` - Deletar um funcionário pelo ID

### Autenticação
- `POST /auth/register` - Registrar um novo usuário
- `POST /auth/login` - Fazer login de um usuário

## Contribuição
Se você deseja contribuir com o projeto, sinta-se à vontade para fazer um fork do repositório e abrir um pull request. Qualquer ajuda é bem-vinda!

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Nota**: Este projeto é desenvolvido para fins educacionais e prática de desenvolvimento web.
