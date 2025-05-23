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
    newWord = '';
    charArr.forEach((character) => newWord += shiftCharacter(character, shift));
    console.log(charArr);
    return newWord;
}

function shiftCharacter(character, shift) {
    // 97 => 122 a => z
    // 65 => 90 A => Z
    console.log(character);
    let upper = false;
    let lower = false;
    let code = character.charCodeAt(0);
    if (code >= 65 && code <= 90) upper = true;
    if (code >= 97 && code <= 122) lower = true;
    console.log(lower);
    console.log(upper);
    if (!lower && !upper) return character;
    code += shift;
    if ((lower && code > 122) || (upper && code > 90)) code -= 26;
    let newChar = String.fromCharCode(code);
    console.log(newChar);
    return newChar;
}
