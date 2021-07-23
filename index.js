const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const newTutorials = tutorials.map((line) => makeLineTitleCase(line));

  return newTutorials;
};

function makeWordTitleCase(w) {
  return w.charAt(0).toUpperCase() + w.slice(1);
}

function makeLineTitleCase(str) {
  return str
    .split(" ")
    .map((w) => makeWordTitleCase(w))
    .join(" ");
}

// console.log('running')
//const word = 'what does the this keyword mean?';
// console.log(word)
// console.log(word.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)))
// console.log(word.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "))
// console.log(makeTitleCase(word));

// console.log(makeWordTitleCase("car"));
