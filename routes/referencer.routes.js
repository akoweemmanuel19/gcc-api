module.exports = app => {
    const referencers = require("../controllers/referencer.controllers");
    const auth = require('../config/auth')

  
    var router = require("express").Router();
  
    // Create a new Data
    router.post("/",auth, referencers.create);
  
    // Retrieve all Datas
    router.get("/",auth, referencers.findAll);
  
    // Retrieve a single Data with id
    router.get("/:id",auth, referencers.findOne);
  
    // Update a Data with id
    router.put("/:id",auth, referencers.update);
  
    // Delete a Data with id
    router.delete("/:id",auth, referencers.delete);
  
    app.use("/api/referencers", router);
  };