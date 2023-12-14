module.exports = app => {
    const referencers = require("../controllers/referencer.controllers");
  
    var router = require("express").Router();
  
    // Create a new Data
    router.post("/", referencers.create);
  
    // Retrieve all Datas
    router.get("/", referencers.findAll);
  
    // Retrieve a single Data with id
    router.get("/:id", referencers.findOne);
  
    // Update a Data with id
    router.put("/:id", referencers.update);
  
    // Delete a Data with id
    router.delete("/:id", referencers.delete);
  
    app.use("/api/referencers", router);
  };