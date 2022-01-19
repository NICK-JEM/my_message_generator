//program generates a random fortune from array of strings

//object containing three arrays of partial fortunes
const wordsArr = {
    first: ["Find", "Stick with", "Make", "Keep", "DESTROY"],
    second: ["your own", "the best", "that", "things that", "people who"],
    third: ["matter", "sign", "mate", "foreplay", "mime"]
};

//function takes object and returns a random index from arrays inside object
const message = (phrase) => {
   const rndIndex = Math.floor(Math.random()*phrase.length);
   return phrase[rndIndex];
}

//log random fortune created from words at the index of specified object array
console.log(`${message(wordsArr.first)} ${message(wordsArr.second)} ${message(wordsArr.third)}`);
