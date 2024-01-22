const {mean, median, mode} = require('./helpers');

describe('mean', function() {
    test('find mean', function() {
        expect(mean([1,2,3,4,5])).toEqual(3);
    })
})

describe('median', function() {
    test('find median', function() {
        expect(median([1,2,3,4,5])).toEqual(3);
    })
    test('find median of even list', function() {
        expect(median([1,2,3,4,5,6])).toEqual(3.5);
    })
})

describe('mode', function() {
    test('find mode', function() {
        expect(mode([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5])).toEqual(5);
    })
})