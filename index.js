let users = new Map();

users.set ("User1", "Ilya");
users.set ("User2", "Ivan");
users.set ("User3", "Nastya");
users.set ("User4", "Nico");


console.log(users.get("User1"));
console.log(users.get("User2"));
console.log(users.get("User3"));
console.log(users.get("User4"));

console.log(users.size);

console.log(users.has("User3"));


console.log(users.delete("User2"));

console.log(users.size);

console.log(users.clear);