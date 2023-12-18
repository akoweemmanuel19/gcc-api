module.exports = app => {
  const connaissances = require("../controllers/connaissance.controller");
  const auth = require('../config/auth')

  var router = require("express").Router();

  router.post("/",auth, connaissances.create);

  router.get("/",auth, connaissances.findAll);

  router.get("/:id",auth, connaissances.findOne);

  router.put("/:id",auth, connaissances.update);

  router.delete("/:id",auth, connaissances.delete);

  app.use("/api/connaissances", router);
};