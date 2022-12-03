const constants = require("../utils/constants");
const validateNumber = require("./validateNumber");

const getUgandanProvider = (ugandanPhoneNumber) => {
    const phoneNumber = ugandanPhoneNumber.toString();
    const isValid = validateNumber(phoneNumber);
    if (isValid) {
        const codeWith7 = phoneNumber.match(/^(256|0|\+256)[7]{1}?/)[0];
        const numberWithoutCodeAnd7 = phoneNumber.replace(codeWith7, "");
        const providerCode = numberWithoutCodeAnd7.charAt(0);
        for (const [key, value] of Object.entries(constants.providerCodes)) {
            const providerMatch =
                value.mobile.find((codeNumber) => providerCode == codeNumber) ||
                value.mobile.find((codeNumber) => providerCode == codeNumber) == 0;
            if (providerMatch) {
                return key;
            } else {
                continue;
            }
        }
        return "No current provider";
    } else {
        throw new Error("Not a valid Ugandan phone number");
    }
}

module.exports = getUgandanProvider;