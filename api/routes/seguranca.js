const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController");

const router = Router();

router
  .post("/seguranca/acl/:usuarioId", SegurancaController.cadastrarAcl)
  .post("/seguranca/permissoes-roles");

module.exports = router;
