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

test('caeserCipher xyz 3 input (wraparound case)', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher HeLLo 3 input (preserve case)', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher Hello, World!1 3 input (check for non alphabetic chars)', () => {
    expect(caesarCipher('Hello, World!1', 3)).toBe('Khoor, Zruog!1');
});

test('caesarCipher xyz 263 input (large cipher number)', () => {
    expect(caesarCipher('xyz', 263)).toBe('abc');
});

test('analyzeArray [1,8,3,4,2,6] input', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('analyzeArray [1,-8,3,-4,2,6] negative numbers input', () => {
    expect(analyzeArray([1, -8, 3, -4, 2, 6])).toStrictEqual({ average: 0, min: -8, max: 6, length: 6 });
});



