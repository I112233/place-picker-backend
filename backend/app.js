// const app = require("express")
// app.use(bodyParser.urlencoded({ extended: true }));

const express = require("express");

const placesRoutes = require("./routes/places");

const app = express();

app.use(express.json());

app.use("/places", placesRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
