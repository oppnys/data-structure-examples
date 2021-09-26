import inputElement from './dom/Input';
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
import restoreIpAddresses from './utils/recursion/restoreIpAddresses';
import findSubstring from './utils/recursion/findSubstring';
import isValid from './utils/stack/isValid';
import firstUniqCharTest from './utils/queue/firstUniqChar';
import log from './utils/log';
import initLinkedList, { ListNode } from './utils/linked-list';
import deleteDuplicates from './utils/linked-list/deleteDuplicates';

const app = document.querySelector('#app');
if (app) app.append(inputElement);

log('Usage: ');
log('------------------------------');

const str = 'Let\'s take LeetCode contest';
log('reverse(Let\'s take LeetCode contest):', reverseString(str));

const result = grayCode(3);
log('grayCode(3): ', result);

const can = canPlaceFlowers([1, 0, 0, 0, 1], 2);
log('canPlaceFlowers([1, 0, 0, 0, 1], 2): ', can);

const isHasGroupSizeX = hasGroupSizeX([1, 1, 2, 2, 2, 2]);
log('hasGroupSizeX(): ', isHasGroupSizeX);

const letter = letterCombinations('89');
log('letterCombinations(23): ', letter);

const bubblingArr = bubbling([5, 8, 5, 2, 9]);
log('bubbling([5, 8, 5, 2, 9]): ', bubblingArr);

const choiceArr = choice([5, 8, 5, 2, 9]);
log('choice([5, 8, 5, 2, 9]): ', choiceArr);

const gap = maximumGap([3, 6, 10, 1]);
log('maximumGap([3, 6, 10, 1]):', gap);

const gap2 = maximumGap([19, 1, 13, 16]);
log('maximumGap([19, 1, 13, 16]):', gap2);

console.time('findXthLargest');
const xthLargest = findXthLargest([3, 2, 1, 5, 6, 4], 2);
console.timeEnd('findXthLargest');
log('findXthLargest([3, 2, 1, 5, 6, 4], 2): ', xthLargest);

const missingPositive = firstMissingPositive([1, 2, 0]);
log(' firstMissingPositive([1,2,0]):', missingPositive);

const ips = restoreIpAddresses('1111');
log("restoreIpAddresses('1111'): ", ips);

const s = 'barfoothefoobarman';
const words = ['foo', 'bar'];
const numbers = findSubstring(s, words);
log('findSubstring', numbers);

const valid = isValid('{()}');
log('isValid("{()}"', valid);

console.time('firstUniqCharTest');
const ss = 'aabb';
const idx = firstUniqCharTest(ss);
console.timeEnd('firstUniqCharTest');
log('firstUniqCharTest(ss)', idx);

log('initLinkedList', initLinkedList());

const o6 = new ListNode(6, null);
const o5 = new ListNode(4, o6);
const o4 = new ListNode(4, o5);
const o3 = new ListNode(4, o4);
const o2 = new ListNode(2, o3);
const o1 = new ListNode(1, o2);

const oo = deleteDuplicates(o1);
log('deleteDuplicates(o3): \n', JSON.stringify(oo, null, 3));
