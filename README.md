![image](https://github.com/user-attachments/assets/17549a4d-fc10-4e9a-8747-c5936caa2d07)
![image](https://github.com/user-attachments/assets/9b5f6bfd-5633-4317-9fe7-39f5fab36687)
![image](https://github.com/user-attachments/assets/78ef2575-58eb-463e-baa2-868f550b0d7d)

💻 Frontend
O frontend foi desenvolvido com React + Vite utilizando TypeScript e estilizado com Tailwind CSS e shadcn/ui, garantindo uma interface moderna, responsiva e acessível.


🧱 Tecnologias principais
React
Vite
TypeScript
Tailwind CSS
shadcn/ui
Axios
React Router DOM

✨ Funcionalidades
Autenticação com JWT (Login)
Integração com API backend para CRUD de Anéis
Armazenamento seguro do token no localStorage
Estilização consistente com shadcn/ui components (cards, inputs, botões)

🔗 API Backend
O backend da aplicação foi desenvolvido com NestJS, seguindo princípios SOLID, com estrutura organizada em módulos e separação clara de responsabilidades. A API possui autenticação com JWT, validação de dados, tratamento de erros e está integrada ao Supabase (PostgreSQL) como banco de dados.

🚀 Documentação Swagger
Você pode testar e visualizar os endpoints diretamente no Swagger rodando localmente:

👉 http://localhost:3000/api

### 🔐 Auth

| Método | Rota             | Descrição                         |
|--------|------------------|-----------------------------------|
| `POST` | `/auth/register` | Criação de usuário (registro)     |
| `POST` | `/auth/login`    | Login do usuário (retorna token)  |

---

### 💍 Rings (Anéis)

| Método   | Rota            | Descrição                                |
|----------|-----------------|------------------------------------------|
| `GET`    | `/rings`        | Lista todos os anéis                     |
| `POST`   | `/rings`        | Cria um novo anel                        |
| `GET`    | `/rings/:id`    | Busca um anel específico                 |
| `PATCH`  | `/rings/:id`    | Atualiza dados de um anel                |
| `DELETE` | `/rings/:id`    | Remove um anel                           |

---

### 📋 Regras de negócio

| Forjado por | Máximo de Anéis |
|-------------|------------------|
| Elfos       | 3                |
| Anões       | 7                |
| Homens      | 9                |
| Sauron      | 1                |

