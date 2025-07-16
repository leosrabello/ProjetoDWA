# Marmitaria Leozitos

Sistema web completo para pedidos de marmitas, com funcionalidades para clientes e administradores, incluindo login, cadastro, pedidos e gerenciamento de produtos.

## Deploy

[Link da aplicação (caso disponível)](https://seusite.com)

- **Frontend**: React + Tailwind CSS  
- **Backend**: .NET Core + Entity Framework

---

## Funcionalidades

### Usuários
- Cadastro e login de clientes e administradores
- Edição de perfil (nome, email e senha)
- Logout seguro

### Pedidos
- Visualização de marmitas com imagem, descrição e valor
- Carrinho de compras com ajuste de quantidade
- Finalização de pedidos com feedback visual (toast)

### Administração
- Cadastro de marmitas com upload de imagem
- Edição e exclusão de produtos
- Acesso exclusivo a administradores para gerenciamento

---

## Tecnologias Utilizadas

**Frontend**
- React
- Tailwind CSS
- React Router
- Context API (mensagens, erros, carrinho)
- Axios

**Backend**
- ASP.NET Core Web API
- Entity Framework Core
- MySQL
- Swagger (documentação de rotas)

---

## Estrutura do Projeto

```
marmitaria-leozitos/
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   └── DTOs/
├── frontend/
│   ├── Components/
│   ├── Pages/
│   ├── Context/
│   ├── App.js
│   └── index.js
```

---

## Como Executar o Projeto

### Backend (.NET Core)

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## Capturas de Tela

Adicione prints das principais telas em uma pasta `screens/` e insira os caminhos aqui:

```
screens/
├── login.png
├── home.png
├── carrinho.png
```

Exemplo:

```markdown
![Login](./screens/login.png)
![Home](./screens/home.png)
```

---
