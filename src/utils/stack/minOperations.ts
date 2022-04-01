export default function minOperations(logs: string[]): number {
  const stack = [];
  let current = 0;
  while (logs.length > current) {
    const log = logs[current];
    if (log === '../' && stack.length) {
      stack.pop();
      // eslint-disable-next-line no-empty
    } else if (log === './') {
    } else {
      stack.push(log);
    }
    current++;
  }
  return stack.length;
}
