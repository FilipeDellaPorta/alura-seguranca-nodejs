const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController");

const router = Router();

router
  .post("/seguranca/acl/:usuarioId", SegurancaController.cadastrarAcl)
  .get("/seguranca/acl/:id", SegurancaController.buscarAclporId);

module.exports = router;
