const data = require("./countries.json");
const fs = require("fs");
const path = require("path");
const file = fs.createWriteStream(path.join(__dirname, "out.json"), {
  flags: "w",
});
let countriesCodes = {};

data.forEach((element) => {
  countriesCodes[element.cca3] = element.name.common;
});
let formattedData = data.map((element) => {
  return {
    id: element.cca3,
    name: element.name,
    capital: element.capital,
    currencies: element.currencies,
    region: element.region,
    population: element.population,
    borders: ((borders) => {
      if (borders) return borders.map((code) => countriesCodes[code]);
      return;
    })(element.borders),
    subRegion: element.subregion,
    languages: element.languages,
    flags: element.flags,
    tdl: element.tdl,
  };
});
file.write(JSON.stringify(formattedData), (error) => {
  if (error) console.log(error);
});
