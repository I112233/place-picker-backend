const fs = require("fs/promises");

exports.getPlaces = async (req, res, next) => {
  const fileContent = await fs.readFile("./data/places.json");

  const placesData = JSON.parse(fileContent);

  res.json({ places: placesData });
};
