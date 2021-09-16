import calPoints from "../../../src/utils/stack/calPoints";

test('calPoints:["5","2","C","D","+"]', ()=>{
    expect(calPoints(["5","2","C","D","+"])).toEqual(30)
})

test('calPoints:["5","-2","4","C","D","9","+","+"]', ()=>{
    expect(calPoints(["5","-2","4","C","D","9","+","+"])).toEqual(27)
})

test('calPoints:["1"]', ()=>{
    expect(calPoints(["1"])).toEqual(1)
})
