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

const db = require("./models");
db.sequelize.sync();
// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to gcc-api of Modernetic Benin." });
});

require("./routes/support.routes")(app);
require("./routes/typeSupport.routes")(app);
require("./routes/typeConnaissance.routes")(app);
require("./routes/typeSupport.routes")(app);
require("./routes/typePartieSupport.routes")(app);
require("./routes/connaissance.routes")(app);
require("./routes/natureSupport.routes")(app);
require("./routes/referencer.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Le server à démarer sur le port :  ${PORT}.`);
});