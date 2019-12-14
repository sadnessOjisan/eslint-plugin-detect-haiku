"use strict";

const countWord = require("js-word-count-for-haiku").default;
const data = require("js-word-kana").default;
const hike = require("haiku-core");

const HIKE_OBJECT = {
  first: {
    word: null,
    kana: null
  },
  second: {
    word: null,
    kana: null
  },
  third: {
    word: null,
    kana: null
  }
};

/**
 * 俳句の中間結果
 * firstが5文字、secondが7文字, thirdが7文字になるように操作を加えていく
 */
const resetHikeObj = () => {
  HIKE_OBJECT.first = {
    word: null,
    kana: null
  };
  HIKE_OBJECT.second = {
    word: null,
    kana: null
  };
  HIKE_OBJECT.third = {
    word: null,
    kana: null
  };
};

const countHikeWord = kana => {
  if (!kana || typeof kana !== "string") {
    return 0;
  }
  return countWord(kana);
};

const setWord = (word, kana, position) => {
  switch (position) {
    case "first":
      if (HIKE_OBJECT.first.word && HIKE_OBJECT.first.kana) {
        HIKE_OBJECT.first = {
          word: HIKE_OBJECT.first.word + word,
          kana: HIKE_OBJECT.first.kana + kana
        };
      } else {
        HIKE_OBJECT.first = {
          word,
          kana
        };
      }
      return;
    case "second":
      if (HIKE_OBJECT.second.word && HIKE_OBJECT.second.kana) {
        HIKE_OBJECT.second = {
          word: HIKE_OBJECT.second.word + word,
          kana: HIKE_OBJECT.second.kana + kana
        };
      } else {
        HIKE_OBJECT.second = {
          word,
          kana
        };
      }
      return;
    case "third":
      if (HIKE_OBJECT.third.word && HIKE_OBJECT.third.kana) {
        HIKE_OBJECT.third = {
          word: HIKE_OBJECT.third.word + word,
          kana: HIKE_OBJECT.third.kana + kana
        };
      } else {
        HIKE_OBJECT.third = {
          word,
          kana
        };
      }
      return;
    default:
      return;
  }
};

const resultHike = HIKE_OBJECT => {
  const { first, second, third } = HIKE_OBJECT;
  return `${first.word} ${second.word} ${third.word}`;
};

module.exports = context => {
  return {
    Identifier: node => {
      hike(node);
    }
  };
};
