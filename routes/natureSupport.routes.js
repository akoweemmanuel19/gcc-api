module.exports = app => {
  const natureSupports = require("../controllers/natureSupport.controllers");

  var router = require("express").Router();

  router.post("/", natureSupports.create);

  router.get("/", natureSupports.findAll);

  router.get("/:id", natureSupports.findOne);

  router.put("/:id", natureSupports.update);

  router.delete("/:id", natureSupports.delete);

  app.use("/api/natureSupports", router);
};