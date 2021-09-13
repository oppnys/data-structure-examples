import canPlaceFlowers from "../../../src/utils/array/canPlaceFlowers";

test('[1,0,0,0,1] canPlaceFlowers: 1', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('[1,0,0,0,1] canPlaceFlowers: 2', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('[0,0,0,0,1] canPlaceFlowers: 2', () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 1], 2)).toBe(true)
})

test('[0,0,0,0,1,0,0,0,0,0] canPlaceFlowers: 4', () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 4)).toBe(true)
})
