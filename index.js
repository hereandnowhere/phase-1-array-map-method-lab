const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function(){
  return tutorials.map(tutorialsSplitter)
}


function tutorialsSplitter(string){
  let splitString = string.split(" ");
  for (let i = 0; i < splitString.length; i++){
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }
  return splitString.join(" ");
}