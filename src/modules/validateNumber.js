const mobileRegex = /^(256|0|\+256)7\d{7}\d$/;
const landlineRegex = /^(256|0|\+256)(20|31|39)(\d{6}\d)$/;

const validateNumber = (ugandanPhoneNumber, validateLandline = true) => {
  const phone = ugandanPhoneNumber.toString();
  var isValidMobile = mobileRegex.test(phone);
  const isValidLandline = landlineRegex.test(phone);

  return isValidMobile || (validateLandline && isValidLandline);
};

module.exports = validateNumber;
