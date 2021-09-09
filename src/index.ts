import inputElement from './dom/Input';
import { sum } from './utils';
import reverseString from './utils/string/ReverseString';

const app = document.querySelector('#app');
if (app) app.append(inputElement);

console.log('Usage: ');
console.log('------------------------------');

const total = sum(1, 1);
console.log(`sum: ${total}`);

const str = 'Let\'s take LeetCode contest';
console.log(`reverse: ${reverseString(str)}`);
