const validUgandanNumber = /^(256|0|\+256)[7]{1}[0-9]{8}$/gim;

const validateNumber = (ugandanPhoneNumber) => {
    return validUgandanNumber.test(ugandanPhoneNumber.toString());
}

module.exports = validateNumber;