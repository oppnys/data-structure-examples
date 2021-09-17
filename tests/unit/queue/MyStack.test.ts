import MyStack from "../../../src/utils/queue/MyStack";

test('MyStack', ()=>{
    const stack = new MyStack()
    stack.push(1)
    stack.push(2)
    expect(stack.top()).toEqual(2)
    expect(stack.pop()).toEqual(2)
    expect(stack.empty()).toEqual(false)
})
