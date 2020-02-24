const { Asset } = require('parcel-bundler');

class CssStringAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'css';
  }
  parse(source) {
    this.code = source;
  }
  generate() {
    return {
      css: this.code,
      js: `module.exports = ${JSON.stringify(
        this.code
      )}`
    };
  }
}

module.exports = CssStringAsset;