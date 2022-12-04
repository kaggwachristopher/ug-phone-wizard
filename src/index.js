const validateNumber = require("./modules/validateNumber")
const getUgandanProvider = require("./modules/getProvider")

class UgPhone {
  static isUgandanNumber = validateNumber;

  static getUgandanProvider = getUgandanProvider;
}

module.exports = UgPhone