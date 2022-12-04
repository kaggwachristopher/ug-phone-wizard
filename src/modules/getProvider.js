const constants = require("../utils/constants");
const validateNumber = require("./validateNumber");

const getDetails = (phoneNumber) => {
    var response = {
        numberType: "",
        simPrefix: ""
    }

    const landLinePrefixRegex = /^(256|0|\+256)(20|31|39|){1}?/
    const mobilePrefixRegex = /^(256|0|\+256)[7][0-9]{1}?/

    const mobilePrefix = phoneNumber.match(mobilePrefixRegex)
    const landLinePrefix = phoneNumber.match(landLinePrefixRegex)

    if (mobilePrefix) {
        response.numberType = "mobile"
        response.simPrefix = mobilePrefix[0].slice(-2)
    } else if (landLinePrefix) {
        response.numberType = "landLine"
        response.simPrefix = landLinePrefix[0].slice(-2)
    }

    return response
}

const getUgandanProvider = (ugandanPhoneNumber, acceptLandline = true) => {
    const phoneNumber = ugandanPhoneNumber.toString();

    const isValid = validateNumber(phoneNumber, acceptLandline);
    if (isValid) {

        var numberDetails = getDetails(ugandanPhoneNumber)

        const providerCode = numberDetails.simPrefix;

        for (const [key, value] of Object.entries(constants.providerCodes)) {

            const isMobileMatch = numberDetails.numberType == "mobile" && value.mobile.includes(providerCode);

            const isLandLineMatch = numberDetails.numberType == "landLine" && value.landLine.includes(providerCode);

            const providerMatch = isMobileMatch || (acceptLandline && isLandLineMatch);


            if (providerMatch) {
                return key;
            } else {
                continue;
            }
        }
    }
    return null;
}

module.exports = getUgandanProvider;