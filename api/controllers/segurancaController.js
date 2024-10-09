const SegurancaService = require("../services/segurancaService");
const segurancaService = new SegurancaService();

class SegurancaController {
  static async cadastrarAcl(req, res) {
    const { roles, permissoes } = req.body;
    const { usuarioId } = req.params;

    try {
      const acl = await segurancaService.cadastrarAcl({
        roles,
        permissoes,
        usuarioId,
      });

      res.status(201).send(acl);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  static async buscarAclporId(req, res) {
    try {
      const usuarioId = req.params.id;
      const usuario = await segurancaService.buscarAclporId(usuarioId);
      res.status(200).send(usuario);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Erro ao buscar usuário.", error: error.message });
    }
  }
}

module.exports = SegurancaController;
