module.exports = app => {
    const referencers = require("../controllers/referencer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", referencers.create);
  
    // Retrieve all Tutorials
    router.get("/", referencers.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", referencers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", referencers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", referencers.delete);
  
    app.use("/api/referencers", router);
  };