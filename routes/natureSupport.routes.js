module.exports = app => {
  const natureSupports = require("../controllers/natureSupport.controllers");
  const auth = require('../config/auth')


  var router = require("express").Router();

  router.post("/",auth, natureSupports.create);

  router.get("/",auth, natureSupports.findAll);

  router.get("/:id",auth, natureSupports.findOne);

  router.put("/:id",auth, natureSupports.update);

  router.delete("/:id",auth, natureSupports.delete);

  app.use("/api/natureSupports", router);
};