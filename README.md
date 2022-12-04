[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3e3b7040c38142b7bbacb9269e71b61b)](https://www.codacy.com/gh/kaggwachristopher/ug-phone-wizard/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kaggwachristopher/ug-phone-wizard&amp;utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/e050f7214bcfed1f2e06/maintainability)](https://codeclimate.com/github/kaggwachristopher/ug-phone-wizard/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e050f7214bcfed1f2e06/test_coverage)](https://codeclimate.com/github/kaggwachristopher/ug-phone-wizard/test_coverage)

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
ugPhone.isUgandanNumber("0755128879", [bool:validateLandline]);
// returns true
```
  *By default, landline numbers are accepted, second argument is optional and true by default*

### Get network service provider of a given phone number

```javascript
ugPhone.getUgandanProvider("+256755128879", [boolean:acceptLandline]);
// returns Airtel
// 
```
##### Note
*This method returns null if no match is found*

*By default, landline numbers are accepted, second argument is optional and true by default*

### Valid number criteria

#### Mobile
- Begins with `2567` or `07` or `+2567` followed by exactly **8** digits

#### Landline
- Begins with `256` or `0` or `+256` followed `20` or `31` or `39` followed by exactly **8** digits
 
#### Valid number examples
##### Mobile
- 07712345678
- +256712345678
- 256712345678

##### Landline
- 0202345678
- 256392345678
- +256312345678
  
### Available service providers

- Airtel
- MTN
- Africell
- Uganda Telecom
- LycaMobile
- Smile Telecom

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
