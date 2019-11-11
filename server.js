app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const EXPHBS = require("express-handlebars");

app.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/catsController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
