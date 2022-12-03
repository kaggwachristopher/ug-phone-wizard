const validateNumber = require("../modules/validateNumber")

test('Should return true for all valid number formats', () => {
    expect(validateNumber("0705128879")).toBe(true) &&
        expect(validateNumber("256755128879")).toBe(true) &&
        expect(validateNumber("+256755128879")).toBe(true) &&
        expect(validateNumber("+256705128879")).toBe(true)
})

test('Should return false if number has no 7 after country code', () => {
    expect(validateNumber("0655128879")).toBe(false) &&
        expect(validateNumber("256655128879")).toBe(false) &&
        expect(validateNumber("+256655128879")).toBe(false)
})

test('Should return false for all numbers with an invalid length', () => {
    expect(validateNumber("075512887")).toBe(false) &&
        expect(validateNumber("25675512887976554")).toBe(false) &&
        expect(validateNumber("+256755")).toBe(false)
})

test('Should return false for all invalid number strings', () => {
    expect(validateNumber("my phone mumber")).toBe(false) &&
        expect(validateNumber("____+++")).toBe(false) &&
        expect(validateNumber("+075tegdj")).toBe(false)
})

test('Should return false when number has whitespaces', () => {
    expect(validateNumber(" 0755128879")).toBe(false) &&
        expect(validateNumber("256755128879 ")).toBe(false) &&
        expect(validateNumber("+256755 128879")).toBe(false)
})

test('Should return false when number is landline and validateLandLine is false', () => {
    expect(validateNumber("+256390237560", false)).toBe(false)
})

test('Should return true when number is landline and validateLandLine is true', () => {
    expect(validateNumber("+256390237560")).toBe(true)
})


