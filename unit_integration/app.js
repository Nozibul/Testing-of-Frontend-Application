const user = [
  { id: 1, name: "Nozibul Islam", email: "shafayet@example.com", age: 45 },
  { id: 2, name: "Riyad Ahmed", email: "riyad@example.com", age: 3 },
  { id: 3, name: "Mithila Khan", email: "mithila@example.com", age: 21 },
  { id: 4, name: "Shafayet Hossain", email: "mithila@example.com", age: 28 }
];

const sortedUser = () => {
  return user.sort((a, b) => a.age - b.age);
};

module.exports = sortedUser;
