// tdd.test.js
const isPalindrome = require("./tdd");
console.log(isPalindrome);

test("multiple inputs → ignore the rest", () => {
  expect(isPalindrome("abc", "def")).toBe(null);
});

test("no input → null", () => {
  expect(isPalindrome()).toBe(null);
});

test("null → null", () => {
  expect(isPalindrome(null)).toBe(null);
});

test("length > 10 → null", () => {
  expect(isPalindrome("abcdefghijk")).toBe(null);
});

test("abc → false", () => {
  expect(isPalindrome("abc")).toBe(false);
});

test("aba → true", () => {
  expect(isPalindrome("aba")).toBe(true);
});

test("a → true", () => {
  expect(isPalindrome("a")).toBe(true);
});

test("123 → false", () => {
  expect(isPalindrome(123)).toBe(false);
});

test("121 → true", () => {
  expect(isPalindrome(121)).toBe(true);
});


