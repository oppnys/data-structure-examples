export default function log(...args: any[]) {
  console.log(`%c${args[0]} %c${args[1] === '' || args[1] === undefined ? '' : args[1]} `, 'color: red', 'color: green');
}
