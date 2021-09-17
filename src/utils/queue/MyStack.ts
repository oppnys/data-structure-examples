/**
 * leetcode 225
 */
export default class MyStack {
    stack: number[]

    constructor() {
      this.stack = [];
    }

    // 将元素 x 压入栈顶。
    push(x: number): void {
      this.stack.push(x);
    }

    // 移除并返回栈顶元素。
    pop(): number {
      return this.stack.pop() as number;
    }

    // 返回栈顶元素。
    top(): number {
      return this.stack[this.stack.length - 1];
    }

    //  如果栈空的，返回 true ；否则，返回 false 。
    empty(): boolean {
      return !this.stack.length;
    }
}
