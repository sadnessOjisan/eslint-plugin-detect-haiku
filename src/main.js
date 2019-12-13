"use strict";

module.exports = context => {
  console.log("start");
  return {
    Identifier: node => {
      console.log(node);
    }
  };
};
