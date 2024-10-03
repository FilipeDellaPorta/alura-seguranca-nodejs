const { Router } = require("express");
const RoleController = require("../controllers/roleController");
const router = Router();

router
  .post("/roles", RoleController.cadastrar)
  .get("/roles", RoleController.buscarTodasAsRoles)
  .get("/roles/:id", RoleController.buscarRolePorId)
  .delete("/roles/:id", RoleController.deletarRolePorId)
  .put("/roles/:id", RoleController.editarRole);

module.exports = router;
