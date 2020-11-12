const { stringReverser, myFavoriteFoods } = require(`./stringReverser`);
let colors = require('colors');
let _ = require('lodash/core');

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

const foodLoop = (arr) => {
    arr.map(x => console.log(`One of my favorite foods is ${x}.`))
}

console.log(stringReverser(myShortString));
console.log(stringReverser(myLongString));
console.log(myFavoriteFoods);
console.log(foodLoop(myFavoriteFoods));


console.log('Green'.magenta);
console.log("LISTEN TO ME!".underline.red)
console.log(`The quick brown fox jumps over the lazy moon.`.trap);
console.log(`The quick brown fox jumps over the lazy moon.`.rainbow);
