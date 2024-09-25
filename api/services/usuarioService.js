const database = require("../models");

class UsuarioService {
  async cadastrar(dto) {
    const usuario = await database.usuario.findOne({
      where: {
        email: dto.email,
      },
    });

    if (usuario) {
      throw new Error("Usuário já cadastrado! Usar e-mail diferente.");
    }
  }
}

module.exports = UsuarioService;
