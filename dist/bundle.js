'use strict';

var React = require('react');

var version = "1.0.0";

function Component() {
  console.log('version', version);
  return /*#__PURE__*/React.createElement("div", null, "hello world!!");
}

module.exports = Component;
