"use strict";
const hike = require("haiku-core");

module.exports = context => {
  return {
    Identifier: node => {
      const data = hike(node);
      if (data) {
        context.report({ node, message: `俳句を検知しました. => ${data}` });
      }
    }
  };
};
