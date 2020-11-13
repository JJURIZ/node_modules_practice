/* Imports - From project and npm packages */
const { stringReverser, myFavoriteFoods } = require(`./stringReverser`);
let colors = require('colors');
let _ = require('lodash');

/* Variables for testing imported function stringReverser */
let myShortString = 'a dog a plan a canal pagoda.';
let myLongString = `I, man, am Regal, a German am I
Never odd or even
If I had a Hi-Fi
Madam, I'm Adam
Too hot to hoot
No lemons no melon
Too bad I hid a boot
Lisa Bonet ate no basil
Warsaw was raw
Was it a car or a cat I saw?`

console.log(stringReverser(myShortString));
console.log(stringReverser(myLongString));

/* Mapping over array of my favorite foods from the stringReverser.js file */
const foodLoop = (arr) => {
    arr.map(x => console.log(`One of my favorite foods is ${x}.`))
}

console.log(myFavoriteFoods);
console.log(foodLoop(myFavoriteFoods));

/* Testing npm pacakage 'colors' */
console.log('Green'.magenta);
console.log("LISTEN TO ME!".underline.red)
console.log(`The quick brown fox jumps over the lazy moon.-WITH TRAP STYLE`.trap);
console.log(`The quick brown fox jumps over the lazy moon.- WITH RAINBOW STYLE!`.rainbow);

/* Arrays for testing Lodash _chunk method */
let testLodashTwo = _.chunk(myFavoriteFoods, [size=2]);
let testLodashThree = _.chunk(myFavoriteFoods, [size=3]);
let testLodashFour = _.chunk(myFavoriteFoods, [size=4]);

/* Testing Lodash _chunk method */
console.log(testLodashTwo);
console.log(testLodashThree);
console.log(testLodashFour);

/* Falsy array for testing */

let falsyArray = [1, 0 , false, true, -1, "False", [0,1,2,3,1,0]];
let compactFalsyArray = _.compact(falsyArray);

console.log(falsyArray);
console.log(compactFalsyArray);