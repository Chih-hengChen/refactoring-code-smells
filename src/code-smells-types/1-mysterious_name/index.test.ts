import { z, cntSUm } from './index.before';
import { multipleNumber, countByKey } from './index';


describe('multipleNumber', () => {
    it('should return 6', () => {
        expect(z(2, 3)).toBe(6);
        expect(multipleNumber(2, 3)).toBe(6);
    });

    it('should return 0', () => {
        expect(z(0, 10)).toBe(0);
        expect(multipleNumber(0, 10)).toBe(0);
    });
});

describe('countByKey', () => {
    it('should return 2', () => {
        const arr = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
            { id: 3, age: 25 },
        ];
        expect(cntSUm(arr, 'name')).toBe(2);
        expect(countByKey(arr, 'name')).toBe(2);
    });

    it('should return 0', () => {
        const arr = [
            { id: 1, age: 30 },
            { id: 2, age: 25 },
        ];
        expect(cntSUm(arr, 'name')).toBe(0);
        expect(countByKey(arr, 'name')).toBe(0);
    });

    it('should return 4', () => {
        const arr = [
            { id: 1, active: false },
            { id: 2, active: 0 },
            { id: 3, active: null },
            { id: 4, active: undefined },
        ];
        expect(cntSUm(arr, 'active')).toBe(4); // The key exists but values are falsy
        expect(countByKey(arr, 'active')).toBe(4); // The key exists but values are falsy
    });
});
