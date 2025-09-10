# **Projeto Node.js + Express + MongoDB + Prisma + JWT**

Este projeto é uma **API simples de autenticação e usuários**, desenvolvido seguindo um tutorial do canal DevClub no YouTube.  
Foi usado o **Express** como servidor, **MongoDB** como banco de dados, **Prisma** como ORM, **bcrypt** para criptografia de senhas e **JWT** para autenticação.  
A API possui **rotas públicas e privadas**, permitindo cadastro, login com geração de token e listagem de usuários autenticados.

---

## **Como usar**

1. **Clonar o repositório e entrar na pasta do projeto**

    ```
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <NOME_DO_PROJETO>
    ```

2. **Instalar dependências**

    ```
    npm install
    ```

3. **Criar o arquivo `.env` na raiz do projeto e definir as variáveis**

    ```
    DATABASE_URL="sua_string_de_conexao_com_o_mongodb"
    JWT_SECRET="um_secret_seguro"
    ```

4. **Gerar o Prisma Client**

    ```
    npx prisma generate
    ```

5. **Rodar o servidor**

    ```
    npm run dev
    ```

---
