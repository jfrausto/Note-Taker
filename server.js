// dependencies
const express = require("express");

// we are creating an express server
const app = express();

const PORT = process.env.PORT || 5000;

// sets express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
// can handle api accessing routes
// can handle html request routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listen!
// this line starts the server on the specified PORT
app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
