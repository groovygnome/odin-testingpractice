import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions.js';

test('capitalize h in hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalze j in john', () => {
    expect(capitalize('john')).toBe('John');
});

test('reverse string hello', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string john', () => {
    expect(reverseString('john')).toBe('nhoj');
});
