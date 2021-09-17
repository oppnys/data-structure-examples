import RecentCounter from "../../../src/utils/queue/RecentCounter";

test('RecentCounter', ()=>{
    const rc = new RecentCounter()
    expect(rc.ping(1)).toEqual(1)
    expect(rc.ping(100)).toEqual(2)
    expect(rc.ping(3001)).toEqual(3)
    expect(rc.ping(3002)).toEqual(3)
})

test('RecentCounter2', ()=>{
    const rc = new RecentCounter()
    expect(rc.ping(642)).toEqual(1)
    expect(rc.ping(1849)).toEqual(2)
    expect(rc.ping(4921)).toEqual(1)
    expect(rc.ping(5936)).toEqual(2)
    expect(rc.ping(5957)).toEqual(3)
})
