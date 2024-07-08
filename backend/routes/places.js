const express = require("express");

const routes = express.Router();

const placesControllers = require("../controllers/places");

routes.get("/", placesControllers.getPlaces);

module.exports = routes;
