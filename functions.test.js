import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions.js';

test('capitalize h in hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalze j in john', () => {
    expect(capitalize('john')).toBe('John');
});

test('no input for capitalize', () => {
    expect(capitalize('')).toBe('');
});

test('null input for capitalize', () => {
    expect(capitalize(null)).toBe(null);
});

test('undefined input for capitalize', () => {
    expect(capitalize(undefined)).toBe(undefined);
});

test('one letter input for capitalize', () => {
    expect(capitalize('a')).toBe('A');
});

test('reverse string hello', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string john', () => {
    expect(reverseString('john')).toBe('nhoj');
});

test('no input for reverseString', () => {
    expect(reverseString('')).toBe('');
});

test('null input for reverseString', () => {
    expect(reverseString(null)).toBe(null);
});

test('undefined input for reverseString', () => {
    expect(reverseString(undefined)).toBe(undefined);
});

test('one letter input for reverseString', () => {
    expect(reverseString('a')).toBe('a');
});

test('calculator exists', () => {
    expect(calculator);
});

test('calculator addition, subtraction, multiplication, division', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.subtract(2, 2)).toBe(0);
    expect(calculator.divide(2, 2)).toBe(1);
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('calculator input is not a number', () => {
    expect(calculator.add('2', 2)).toBe(null);
    expect(calculator.subtract('', 2)).toBe(null);
    expect(calculator.divide(2, 'two')).toBe(null);
    expect(calculator.multiply(NaN, 2)).toBe(null);
});

test('caesarCipher abc 3 input', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});


