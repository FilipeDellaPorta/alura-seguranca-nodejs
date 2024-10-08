# 🛠️ API de Gestão de Usuários, Produtos, Permissões e Roles

Este repositório contém uma API desenvolvida em **JavaScript** com **Node.js**, que realiza operações de CRUD para **Usuários**, **Produtos**, **Permissões** e **Roles**. Além disso, a API implementa controle de acesso baseado em **Roles** e **Permissões** para garantir a segurança nas rotas.

## 📚 Funcionalidades

- **CRUD de Usuários**:
  - Criação, leitura, atualização e exclusão de usuários.

- **CRUD de Produtos**:
  - Criação, leitura, atualização e exclusão de produtos.

- **CRUD de Permissões**:
  - Definição, visualização, atualização e remoção de permissões.

- **CRUD de Roles**:
  - Criação, atualização, leitura e remoção de roles (grupos de permissões).

- **Verificação de Roles e Permissões**:
  - Acesso às rotas de produtos é controlado com base nas permissões atribuídas aos usuários.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para criar as rotas da API.
- **MongoDB** ou outro banco de dados (especifique o que está usando).
- **JWT**: Utilizado para autenticação e autorização de usuários.
- **bcrypt**: Para hashing de senhas. 
