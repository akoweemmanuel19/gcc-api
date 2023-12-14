module.exports = app => {
  const connaissances = require("../controllers/connaissance.controller");

  var router = require("express").Router();

  router.post("/", connaissances.create);

  router.get("/", connaissances.findAll);

  router.get("/:id", connaissances.findOne);

  router.put("/:id", connaissances.update);

  router.delete("/:id", connaissances.delete);

  app.use("/api/connaissances", router);
};