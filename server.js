// dependencies
const express = require("express");
// we are creating an express server for the app
const app = express();
// will use the contextual port if deployed
const PORT = process.env.PORT || 3000;

// sets express to handle data parsing
// can handle json data
// use static files in the public folder; css, js, html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// router
// can handle api accessing routes
// can handle html request routes
// these Requires behave like functions;
// they use app as a parameter
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen!
// this line starts the server on the specified PORT
app.listen(PORT, function () {
  console.log("App is listening on: " + PORT);
});
