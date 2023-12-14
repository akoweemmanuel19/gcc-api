module.exports = app => {
  const typeConnaissances = require("../controllers/typeConnaissance.controllers");

  var router = require("express").Router();

  router.post("/", typeConnaissances.create);

  router.get("/", typeConnaissances.findAll);

  router.get("/:id", typeConnaissances.findOne);

  router.put("/:id", typeConnaissances.update);

  router.delete("/:id", typeConnaissances.delete);

  app.use("/api/typeConnaissances", router);
};