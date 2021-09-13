import inputElement from './dom/Input';
import { sum } from './utils';
import reverseString from './utils/string/ReverseString';
import grayCode from './utils/array/grayCode';
import canPlaceFlowers from './utils/array/canPlaceFlowers';
import hasGroupSizeX from './utils/array/hasGroupSizeX';
import letterCombinations from './utils/array/letterCombinations';

const app = document.querySelector('#app');
if (app) app.append(inputElement);

console.log('Usage: ');
console.log('------------------------------');

const total = sum(1, 1);
console.log(`sum(1, 1): ${total}`);

const str = 'Let\'s take LeetCode contest';
console.log(`reverse(Let's take LeetCode contest): ${reverseString(str)}`);

const result = grayCode(3);
console.log('grayCode(3): ', result);

const can = canPlaceFlowers([1, 0, 0, 0, 1], 2);
console.log('canPlaceFlowers([1, 0, 0, 0, 1], 2): ', can);

const isHasGroupSizeX = hasGroupSizeX([1, 1, 2, 2, 2, 2]);
console.log('hasGroupSizeX(): ', isHasGroupSizeX);

const letter = letterCombinations('89');
console.log('letterCombinations(23): ', letter);
