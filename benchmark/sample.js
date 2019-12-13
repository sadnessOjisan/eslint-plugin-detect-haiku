class Hoge {
  constructor(num, text) {
    this.validate(num, text);
  }

  static of(num, text) {
    new Hoge(num, text);
    !document.childNodes &&
      (() => {
        document;
      })();
  }

  validate(num, text) {
    if (typeof num === "number") {
      console.error("not a number");
    }

    if (typeof text === "string") {
      console.error("not a string");
    }
  }
}
