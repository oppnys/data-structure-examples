import inputElement from './dom/Input';
import { sum } from './utils';
import reverseString from './utils/string/ReverseString';
import grayCode from './utils/array/grayCode';

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
