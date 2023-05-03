const validUgandanNumber = /^(256|0|\+256)7\d{7}\d$/;
const providerCodes = {
  Airtel: [0, 4, 5],
  MTN: [7, 8, 6],
  "Uganda Telecom": [1],
  LycaMobile: [2],
  "Smile Telecom": [3],
  Africell: [9],
};

class UgPhone {
  static isUgandanNumber(ugandanPhoneNumber) {
    return validUgandanNumber.test(ugandanPhoneNumber.toString());
  }

  static getUgandanProvider(ugandanPhoneNumber) {
    const phoneNumber = ugandanPhoneNumber.toString();
    if (this.isUgandanNumber(phoneNumber)) {
      const codeWith7 = phoneNumber.match(/^(256|0|\+256)[7]{1}?/)[0];
      const numberWithoutCodeAnd7 = phoneNumber.replace(codeWith7, "");
      const providerCode = numberWithoutCodeAnd7.charAt(0);
      for (const [key, value] of Object.entries(providerCodes)) {
        const providerMatch =
          value.find((codeNumber) => providerCode == codeNumber) ||
          value.find((codeNumber) => providerCode == codeNumber) == 0;
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
}
module.exports = UgPhone;
exports.ugPhone = UgPhone;
