"use strict";

module.exports = context => {
  return {
    Identifier: node => {
      console.log(node);
    }
  };
};
