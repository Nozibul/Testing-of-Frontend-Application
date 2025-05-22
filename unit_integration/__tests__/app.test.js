const sortedUser = require("../app");

test("sortedUser should return users sorted by age ascending", () => {
  const sorted = sortedUser();
  expect(sorted[0].age).toBe(3);
  expect(sorted[3].age).toBe(45);
});

test("Testing if the first user age is 3", () => {
  const sorted = sortedUser();
  expect(sorted[0].age).toBe(3);
});

test("Testing if the last user age is 45", () => {
  const sorted = sortedUser();
  expect(sorted[sorted.length - 1].name).toBe("Nozibul Islam");
});

test("Testing if the sorted data has length 4", () => {
  const sorted = sortedUser();
  expect(sorted.length).toBe(4);
});

test("TEsting are not equal", () => {
  const sorted = sortedUser();
//   expect(sorted).not.toBe(undefined);
  expect(sorted).toBeDefined();
});

// toBeTruthy() truthy মান কিনা (যেমন: "abc", 1, {} ইত্যাদি)
test("sortedUser সত্য মান (truthy) কিনা যাচাই", () => {
  const sorted = sortedUser();
  expect(sorted).toBeTruthy();
});

// toContain(item) array এর মধ্যে নির্দিষ্ট item আছে কিনা
test("sortedUser এ 'Riyad Ahmed' আছে কিনা", () => {
  const sorted = sortedUser();
  const names = sorted.map(user => user.name);
  expect(names).toContain("Riyad Ahmed");
});

// toHaveLength(number) array/string এর length যাচাই
test("sortedUser ডেটার length ৪ কিনা", () => {
  const sorted = sortedUser();
  expect(sorted).toHaveLength(4);
});

// toEqual(value) object/array এর মান সমান কিনা (reference নয়, value)
test("user[0] এর মান যাচাই", () => {
  const sorted = sortedUser();
  expect(sorted[0]).toEqual({
    id: 2,
    name: "Riyad Ahmed",
    email: "riyad@example.com",
    age: 3,
  });
});

// toThrow() কোনো function error ছুঁড়ে দেয় কিনা
test("error ছোঁড়া হচ্ছে কিনা", () => {
  const throwError = () => {
    throw new Error("Something went wrong");
  };
  expect(throwError).toThrow();
});
