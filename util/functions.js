/**
 *
 * @param {Number} population
 * @param {String|Boolean } format-
 * @returns string|number
 */
export const formatPopulation = (population, format = "comas") => {
  //Convert the given population into the commas
  let formattedPopulation = population
    .toString()
    .split("")
    .reverse()
    .map((digit, index, array) => {
      //   console.log((index + 1) % 3 == 0);
      if ((parseInt(index) + 1) % 3 == 0) {
        // array.push(",");
        return digit;
      }
      //   console.log(array);
      return digit;
    })
    .reverse()
    .join("");
  //   console.log(formattedPopulation);

  if (format == "commas") return formattedPopulation;
  //
  if (format == "words") {
    //Return population in words
    let populationNumbers = formattedPopulation.split(",");
    switch (populationNumbers.length) {
      case 1:
        return `${populationNumbers[0]}`;
      case 2:
        return `${populationNumbers[0]}.${populationNumbers[1][0]} thousand`;
      case 3:
        return `${populationNumbers[0]}.${populationNumbers[1][0]} million`;
      case 3:
        return `${populationNumbers[0]}.${populationNumbers[1][0]} billion`;
      default:
        return formattedPopulation;
    }
  }
  return population;
};

/**
 * return the array containing the values or  the keys or even both. of the give object
 * @param {object} object
 * @param {String} select
 * @returns {array}
 */
export const objectToArray = (object, select = "values") => {
  switch (select) {
    case "keys":
      return Object.keys(object);
    case "values":
      return Object.values(object);
    case "both":
    default:
      return Object.entries(object);
  }
};

/**
 * return the function which can be used to filter the given array by providing the values need
 * @param {Array} elements
 * @param {Function} handler
 * @returns
 */
export const filter = (elements, handler) => {
  if (!(elements && Array.isArray(elements))) return (options) => [];
  return (options) => {
    console.log(options);
    return handler(
      elements.filter((element) => {
        let predicate = true;
        for (let key in options) {
          if (options[key] && key.includes(".")) {
            const properties = key.split(".");
            let value = element;
            properties.forEach((key) => {
              if (typeof value == "object") value = value[key];
            });
            if (!(typeof value == "string" || Array.isArray(value))) continue;
            if (!value.includes(options[key])) return false;
          } else {
            if (options[key] && element[key]) {
              switch (typeof element[key]) {
                case "string":
                  if (!element[key].includes(options[key])) return false;
                case "object":
                  if (Array.isArray(element[key]))
                    if (!element[key].includes(options[key])) return false;
                  break;

                default:
                  //Implement other options
                  "pass";
              }
            }
          }
        }
        return predicate;
      })
    );
  };
};
