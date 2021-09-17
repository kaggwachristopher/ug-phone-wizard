# ug-phone-wizard

Check Validity and Service Providers of Ugandan phone numbers

## Installation

Use the node package manager [npm](https://docs.npmjs.com/) to install ug-phone-wizard.

```bash
npm install ug-phone-wizard
```

## Usage

### Include in your project

#### ES5

```javascript
const phoneWizard = require("ug-phone-wizard");
```

#### ES6

```javascript
import phoneWizard from "ug-phone-wizard";
```

### Check if phone number is in valid Ugandan format

```javascript
phoneWizard.isUgandanNumber("0755128879");
// returns true
```

### Get network service provider of a given phone number

```javascript
phoneWizard.getUgandanProvider("+256755128879");
// returns Airtel
```

### Valid number criteria

- Begins with `2567` or `07` or `+2567` followed by exactly **8** digits

#### Valid number examples

- 07712345678
- +256712345678
- 256712345678

### Available service providers

- Airtel
- MTN
- Africell
- Uganda Telecom
- Lycamobile
- Smile Telecom

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
