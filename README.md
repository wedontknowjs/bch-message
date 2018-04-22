Bch Message
=======

[![NPM Package](https://img.shields.io/npm/v/bch-message.svg?style=flat-square)](https://www.npmjs.org/package/bch-message)
[![Build Status](https://img.shields.io/travis/owstack/bch-message.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bch-message)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bch-message.svg?style=flat-square)](https://coveralls.io/r/owstack/bch-message?branch=master)

Adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bch repo](https://github.com/owstack/bch) for more information.

## Getting Started

```sh
npm install bch-message
```

```sh
bower install bch-message
```

To sign a message:

```javascript
var bchLib = require('@wedontknowjs/bch-lib');
var Message = require('@wedontknowjs/bch-message');

var privateKey = bchLib.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/bch/blob/master/CONTRIBUTING.md) on the main bch repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bch/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.

