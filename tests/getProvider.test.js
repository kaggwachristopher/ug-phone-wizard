const getProvider = require("../modules/getProvider")
const constants = require("../utils/constants")

test('Should return Airtel for Airtel code 5', () => {
    expect(getProvider("0755128879")).toBe("Airtel")
})

test('Should return Airtel for Airtel code 0', () => {
    expect(getProvider("0705128879")).toBe("Airtel")
})

test('Should return Airtel for Airtel code 4', () => {
    expect(getProvider("0745128879")).toBe("Airtel")
})

test('Should return MTN for MTN code 7', () => {
    expect(getProvider("0775128879")).toBe("MTN")
})

test('Should return MTN for MTN code 8', () => {
    expect(getProvider("0785128879")).toBe("MTN")
})

test('Should return MTN for MTN code 6', () => {
    expect(getProvider("0765128879")).toBe("MTN")
})


test('Should return Uganda Telecom for Uganda Telecom code 1', () => {
    expect(getProvider("0715128879")).toBe("Uganda Telecom")
})

test('Should return Lycamobile for Lycamobile code 2', () => {
    expect(getProvider("0725128879")).toBe("LycaMobile")
})