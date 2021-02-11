const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontal", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present vertical", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "LARRY"
    );

    assert.isTrue(result);
  });

  it("should return false if the word is empty string", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      ""
    );
    assert.isFalse(result);
  });

  it("should return true if word is present even if the word is in lowercase", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "wap"
    );
    assert.isTrue(result);
  });

  it("should return false if word length is 1", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "A"
    );
    assert.isFalse(result);
  });
});
