# ug-phone

Check Validity and Service Providers of Ugandan phone numbers

## Installation

Use the node package manager [npm](https://docs.npmjs.com/) to install ug-phone.

```bash
npm install ug-phone
```

## Usage

### Include in your project

#### ES5

```javascript
const ugPhone = require("ug-phone");
```

#### ES6

```javascript
import ugPhone from "ug-phone";
```

### Check if phone number is in valid Ugandan format

```javascript
ugPhone.isUgandanNumber("0755128879");
// returns true
```

### Get network service provider of a given phone number

```javascript
ugPhone.getUgandanProvider("+256755128879");
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
