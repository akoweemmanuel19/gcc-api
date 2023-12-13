const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://**"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur gcc-api de Modernetic Benin." });
});

require("./app/routes/support.routes")(app);
require("./app/routes/typeSupport.routes")(app);
require("./app/routes/typeConnaissance.routes")(app);
require("./app/routes/typeSupport.routes")(app);
require("./app/routes/typePartieSupport.routes")(app);
require("./app/routes/connaissance.routes")(app);
require("./app/routes/natureSupport.routes")(app);
require("./app/routes/referencer.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Le server à démarer sur le port :  ${PORT}.`);
});