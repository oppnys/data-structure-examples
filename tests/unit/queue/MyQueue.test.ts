import MyQueue from "../../../src/utils/queue/MyQueue";

test('MyQueue', ()=>{
    const queue :MyQueue= new MyQueue()
    queue.push(1); // queue is: [1]
    queue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    expect(queue.peek()).toEqual(1)
    expect(queue.pop()).toEqual(1)
    expect(queue.empty()).toEqual(false)
})
