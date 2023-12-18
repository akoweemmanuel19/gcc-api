module.exports = app => {
  const typeConnaissances = require("../controllers/typeConnaissance.controllers");
  const auth = require('../config/auth')


  var router = require("express").Router();

  router.post("/",auth, typeConnaissances.create);

  router.get("/",auth, typeConnaissances.findAll);

  router.get("/:id",auth, typeConnaissances.findOne);

  router.put("/:id",auth, typeConnaissances.update);

  router.delete("/:id",auth, typeConnaissances.delete);

  app.use("/api/typeConnaissances", router);
};