import inputElement from './dom/Input';
import { sum } from './utils';
import reverseString from './utils/string/ReverseString';
import grayCode from './utils/array/grayCode';
import canPlaceFlowers from './utils/array/canPlaceFlowers';
import hasGroupSizeX from './utils/array/hasGroupSizeX';
import letterCombinations from './utils/array/letterCombinations';
import bubbling from './utils/sort/bubbling';
import choice from './utils/sort/choice';
import maximumGap from './utils/sort/maximumGap';
import findXthLargest from './utils/sort/findXthLargest';
import firstMissingPositive from './utils/sort/firstMissingPositive';

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

const bubblingArr = bubbling([5, 8, 5, 2, 9]);
console.log('bubbling([5, 8, 5, 2, 9]): ', bubblingArr);

const choiceArr = choice([5, 8, 5, 2, 9]);
console.log('choice([5, 8, 5, 2, 9]): ', choiceArr);

const gap = maximumGap([3, 6, 10, 1]);
console.log('maximumGap([3, 6, 10, 1]):', gap);

const gap2 = maximumGap([19, 1, 13, 16]);
console.log('maximumGap([19, 1, 13, 16]):', gap2);

console.time('findXthLargest');
const xthLargest = findXthLargest([3, 2, 1, 5, 6, 4], 2);
console.timeEnd('findXthLargest');
console.log('findXthLargest([3, 2, 1, 5, 6, 4], 2): ', xthLargest);

const missingPositive = firstMissingPositive([1, 2, 0]);
console.log(' firstMissingPositive([1,2,0]):', missingPositive);
