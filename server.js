const express = require("express");
app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const PORT = 8080;

const routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});