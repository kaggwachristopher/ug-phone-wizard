const getProvider = require("../modules/getProvider")

test('Should return Airtel for Airtel code 5', () => {
    expect(getProvider("0755128879")).toBe("Airtel")
})

test('Should return Airtel for Airtel code 0', () => {
    expect(getProvider("0705128879")).toBe("Airtel")
})

test('Should return Airtel for Airtel code 4', () => {
    expect(getProvider("0745128879")).toBe("Airtel")
})

test('Should not return Airtel for Airtel landline code 020 when acceptLandline is false', () => {
    expect(getProvider("0202207100", false).includes("Airtel")).toBe(false)
})

test('Should return Airtel for Airtel landline code 020 when acceptLandline is true', () => {
    expect(getProvider("0202207100")).toBe("Airtel")
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

test('Should not return MTN for MTN landline code 039 when acceptLandline is false', () => {
    expect(getProvider("0392207100", false).includes("MTN")).toBe(false)
})

test('Should return MTN for MTN landline code 039 when acceptLandline is true', () => {
    expect(getProvider("0392207100")).toBe("MTN")
})

test('Should not return MTN for MTN landline code 031 when acceptLandline is false', () => {
    expect(getProvider("0312207100", false).includes("MTN")).toBe(false)
})

test('Should return MTN for MTN landline code 031 when acceptLandline is true', () => {
    expect(getProvider("0312207100")).toBe("MTN")
})

test('Should return Uganda Telecom for Uganda Telecom code 1', () => {
    expect(getProvider("0715128879")).toBe("Uganda Telecom")
})

test('Should return Lycamobile for Lycamobile code 2', () => {
    expect(getProvider("0725128879")).toBe("LycaMobile")
})

test('Should return Smile Telecom for Smile Telecom code 3', () => {
    expect(getProvider("0735128879")).toBe("Smile Telecom")
})

test('Should return Africell for Africell code 9', () => {
    expect(getProvider("0795128879")).toBe("Africell")
})