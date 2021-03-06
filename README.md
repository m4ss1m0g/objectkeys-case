# objectkeys-case

Change the case (to upper or to lower) of the first char of object properties.

## Install

### yarn

```bash
yarn add objectkeys-case
```

### npm

```bash
npm install objectkeys-case
```

## Usage

```javascript
const { lowCaseKeys, upCaseKeys } = require("objectkeys-case");

const data = {
    Foo: "foo",
    BAR: "BAR",
    Baz: {
        SUb1: "sub1",
        sUb2: "sub2",
    }
};

const lower = lowCaseKeys(data);

/*
lower
{
    foo: "foo",
    bAR: "BAR",
    baz: {
        sUb1: "sub1",
        sUb2: "sub2"
    }
}
*/

const upper = upCaseKeys(data);

/*
upper
{
    Foo: "foo",
    BAR: "BAR",
    Baz: {
        SUb1: "sub1",
        SUb2: "sub2"
    }
}
*/

```

## Release notes

### 1.2.0 - 2020-08-04

- Now working with objects and arrays

### 1.1.0 - 2020-07-19

- Improved for null values

### 1.0.0 - 2020-07-05

- Initial release
