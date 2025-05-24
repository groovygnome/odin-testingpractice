export function capitalize(word) {
    if (!word) return word;
    let firstLetter = word.at(0).toUpperCase();
    let theRest = word.slice(1);
    return firstLetter.concat(theRest);
}

export function reverseString(word) {
    if (!word) return word;
    let reversed = word.split('').reverse().join('');
    return reversed;
}

export const calculator = {
    add: function(num1, num2) {
        if (this.checkNumbers(num1, num2)) {
            return num1 + num2;
        } else {
            return null;
        }
    },

    subtract: function(num1, num2) {
        if (this.checkNumbers(num1, num2)) {
            return num1 - num2;
        } else {
            return null;
        }
    },

    divide: function(num1, num2) {
        if (this.checkNumbers(num1, num2)) {
            return num1 / num2;
        } else {
            return null;
        }
    },

    multiply: function(num1, num2) {
        if (this.checkNumbers(num1, num2)) {
            return num1 * num2;
        } else {
            return null;
        }
    },

    checkNumbers: function(num1, num2) {
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2) || typeof num1 === 'string' || typeof num2 === 'string') return false;
        return true;
    }
};

export function caesarCipher(word, shift) {
    let charArr = word.split('');
    let newWord = '';
    charArr.forEach((character) => newWord += shiftCharacter(character, shift));
    return newWord;
}

function shiftCharacter(character, shift) {
    // 97 => 122 a => z
    // 65 => 90 A => Z
    let upper = false;
    let lower = false;
    let code = character.charCodeAt(0);
    if (code >= 65 && code <= 90) upper = true;
    if (code >= 97 && code <= 122) lower = true;
    if (!lower && !upper) return character;
    code += shift;
    while ((lower && code > 122) || (upper && code > 90)) code -= 26;
    let newChar = String.fromCharCode(code);
    return newChar;
}

export function analyzeArray(array) {
    let avg = 0;
    let minimum = array[0];
    let maximum = array[0];
    let size = 0;
    array.forEach((num) => {
        size++;
        if (num < minimum) minimum = num;
        if (num > maximum) maximum = num;
        avg += num;
    });
    avg /= size;
    return { average: avg, min: minimum, max: maximum, length: size };
}
