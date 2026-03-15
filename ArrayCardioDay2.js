const people = [
  { name: "Rahul", year: 2000 },
  { name: "Anshu", year: 2006 },
  { name: "Priya", year: 2001 },
  { name: "Aman", year: 1995 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Nice Nice Nice!", id: 123523 },
];

//Some and Every => it checks

//1. is at least one person 19?

// const isAdult = people.some((person) => {
//   return (new Date().getFullYear())-person.year >= 19
// })

const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19,
);
console.log({ isAdult });

//2. is everyone 19?

const allAdults = people.every(
  (person) => new Date().getFullYear() - person.year >= 19,
);
console.log(allAdults);

//3. find a comment with id : 523423?
const id = 823423;
const message = comments.find(comment => comment.id === id)

console.log(message);

const index = comments.findIndex(comment => comment.id === id);

console.log(index);


// comments.splice(index, 1);

const newComm = [
  ...comments.slice(0, index),
  ...comments.slice(index+1)
]
console.log(newComm);




