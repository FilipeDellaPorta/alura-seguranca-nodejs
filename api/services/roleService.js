const database = require("../models");
const uuid = require("uuid");

class RoleService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({
      where: {
        nome: dto.nome,
      },
    });

    if (role) {
      throw new Error("Role já cadastrado.");
    }

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newRole;
    } catch (error) {
      console.error("Erro ao cadastrar role:", error);  // Mostra o erro completo no console para ajudar no debug
      throw new Error(`Erro ao cadastrar role: ${error.message}`);  // Inclui a mensagem original do erro
    }
  }
}

module.exports = RoleService;
