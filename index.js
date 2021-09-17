const validUgandanNumber = /^(256|0|\+256)[7]{1}[0-9]{8}$/gim;
const providerCodes = {
  Airtel: [0, 4, 5],
  MTN: [7, 8, 6],
  "Uganda Telecom": [1],
  LycaMobile: [2],
  "Smile Telecom": [3],
  Africell: [9],
};

class UgPhoneWizard {
  static isUgandanNumber  (ugandanPhoneNumber)  {
    return validUgandanNumber.test(ugandanPhoneNumber.toString());
  };

  static getUgandanProvider(ugandanPhoneNumber) {
    
    const phoneNumber = ugandanPhoneNumber.toString();
    if (this.isUgandanNumber(phoneNumber)) {
      const codeWith7 = phoneNumber.match(/^(256|0|\+256)[7]{1}?/)[0];
      const numberWithoutCodeAnd7 = phoneNumber.replace(codeWith7, "");
      const providerCode = numberWithoutCodeAnd7.charAt(0);

      for (const [key, value] of Object.entries(providerCodes)) {
        if (value.find((codeNumber) => providerCode == codeNumber)) {
          return key;
        } else {
          continue;
        }
      }
      return "No current provider";
    } else {
      throw new Error("Not a valid Ugandan phone number");
    }
  };
}

module.exports = UgPhoneWizard;
exports.phoneWizard=UgPhoneWizard
