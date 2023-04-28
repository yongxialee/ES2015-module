import foods from './foods.js';
import {choice,remove} from './helpers';

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let remaining = remove(fruit, foods);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);