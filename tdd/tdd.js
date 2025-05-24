const isPalindrome = (...args) => {
  // Multiple inputs → null
  if (args.length !== 1) return null;

  let x = args[0];

  // null or undefined → null
  if (x === null || x === undefined) return null;

  // Number → convert to positive string
  if (typeof x === "number") {
    x = Math.abs(x).toString();
  }

  // Reject if not string after conversion
  if (typeof x !== "string") return null;

  // Length check
  if (x.length > 10) return null;
  if (x.length === 1) return true;

  // Normalize string
  x = x.toLowerCase().trim();

  // Check palindrome
  const reverse = x.split("").reverse().join("");
  return x === reverse;
};

module.exports = isPalindrome;
