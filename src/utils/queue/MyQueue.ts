/**
 * leetcode 232
 */
export default class MyQueue {
    os : number[]

    is: number[]

    constructor() {
      this.os = [];
      this.is = [];
    }

    // 将元素 x 推到队列的末尾
    push(x: number): void {
      this.is.push(x);
    }

    // 从队列的开头移除并返回元素
    pop(): number {
      if (!this.os.length) {
        while (this.is.length) {
          this.os.push(this.is.pop() as number);
        }
      }
      return this.os.pop() as number;
    }

    // 返回队列开头的元素
    peek(): number {
      if (!this.os.length) {
        while (this.is.length) {
          this.os.push(this.is.pop() as number);
        }
      }
      return this.os[this.os.length - 1];
    }

    // 如果队列为空，返回 true ；否则，返回 false
    empty(): boolean {
      return !this.is.length && !this.os.length;
    }
}
