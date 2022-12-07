users = [
    {
        name: 'Yazeed',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Bill',
        age: 20
    }
];
// getName = (user) => user.name;

usernames = users.map(user => user.name);

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]